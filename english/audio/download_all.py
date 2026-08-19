#!/usr/bin/env python3
"""
Standard word audio downloader.
Oxford API first, edge-tts fallback, always 44.1kHz MP3 output.
Usage: python3 download_all.py word1 word2 ...
"""
import sys, os, re, time, subprocess, urllib.request, urllib.error

AUDIO_DIR = "/mnt/e/儿童教育/英语/自然拼读/audio/words"
os.makedirs(AUDIO_DIR, exist_ok=True)

HEADERS = {"User-Agent": "Mozilla/5.0"}

def download_oxford(word):
    """Try Oxford API, return True if success."""
    out_path = os.path.join(AUDIO_DIR, f"{word}.mp3")
    url = f"https://www.oxfordlearnersdictionaries.com/definition/english/{word}"
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        html = urllib.request.urlopen(req, timeout=15).read().decode("utf-8")
    except Exception:
        return False
    
    m = re.search(r'data-src-mp3="([^"]*uk[^"]*\.mp3)"', html)
    if not m:
        m = re.search(r'data-src-mp3="([^"]*\.mp3)"', html)
    if not m:
        return False
    
    try:
        mp3_url = m.group(1)
        req2 = urllib.request.Request(mp3_url, headers=HEADERS)
        data = urllib.request.urlopen(req2, timeout=15).read()
        with open(out_path, "wb") as f:
            f.write(data)
        return os.path.getsize(out_path) > 1000
    except Exception:
        return False

def download_edge(word):
    """Download via edge-tts, always convert to 44.1kHz."""
    out_path = os.path.join(AUDIO_DIR, f"{word}.mp3")
    tmp = f"/tmp/edgetts_{word}.mp3"
    
    try:
        subprocess.run([
            'edge-tts', '--voice', 'en-US-JennyNeural',
            '--text', word, '--write-media', tmp
        ], capture_output=True, timeout=20, check=True)
        
        # Always normalize to 44.1kHz
        subprocess.run([
            'ffmpeg', '-y', '-i', tmp,
            '-acodec', 'libmp3lame', '-ar', '44100', '-ab', '128k',
            '-map_metadata', '-1', out_path
        ], capture_output=True, timeout=10, check=True)
        
        os.remove(tmp)
        return os.path.exists(out_path) and os.path.getsize(out_path) > 500
    except Exception:
        return False

def download(word):
    out_path = os.path.join(AUDIO_DIR, f"{word}.mp3")
    if os.path.exists(out_path) and os.path.getsize(out_path) > 1000:
        # Verify it's 44.1kHz
        result = subprocess.run(['ffprobe', '-v', 'error', '-select_streams', 'a:0',
                                '-show_entries', 'stream=sample_rate', '-of', 'csv=p=0', out_path],
                               capture_output=True, text=True)
        if '44100' in result.stdout:
            print(f"  SKIP {word} (exists)")
            return True
        else:
            # Exists but wrong format, re-download
            print(f"  REFORMAT {word}")
    
    # Try Oxford first
    print(f"  TRY Oxford: {word}")
    if download_oxford(word):
        print(f"  OK   {word} [Oxford]")
        return True
    
    # Fall back to edge-tts
    print(f"  TRY edge-tts: {word}")
    if download_edge(word):
        print(f"  OK   {word} [edge-tts]")
        return True
    
    print(f"  FAIL {word}")
    return False

if __name__ == "__main__":
    words = sys.argv[1:]
    if not words:
        print("Usage: python3 download_all.py word1 word2 ...")
        sys.exit(1)
    
    ok = 0
    for w in words:
        w = w.strip().lower()
        if download(w):
            ok += 1
        time.sleep(0.8)  # polite to Oxford API
    
    print(f"\nDone: {ok}/{len(words)}")
