#!/usr/bin/env python3
"""Download word audio from Oxford Learner's Dictionaries.
Usage: python3 download_word_audio.py word1 word2 word3 ...
Output: audio/words/{word}.mp3 (relative to page directory)
"""

import sys, os, re, time, urllib.request, urllib.error

AUDIO_DIR = "/mnt/e/儿童教育/英语/自然拼读/audio/words"
os.makedirs(AUDIO_DIR, exist_ok=True)

HEADERS = {"User-Agent": "Mozilla/5.0"}

def download(word):
    out_path = os.path.join(AUDIO_DIR, f"{word}.mp3")
    if os.path.exists(out_path) and os.path.getsize(out_path) > 1000:
        print(f"  SKIP {word} (exists)")
        return True

    url = f"https://www.oxfordlearnersdictionaries.com/definition/english/{word}"
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        html = urllib.request.urlopen(req, timeout=15).read().decode("utf-8")
    except Exception as e:
        print(f"  FAIL {word}: {e}")
        return False

    # Find UK pronunciation MP3 URL
    m = re.search(r'data-src-mp3="([^"]*uk[^"]*\.mp3)"', html)
    if not m:
        m = re.search(r'data-src-mp3="([^"]*\.mp3)"', html)
    if not m:
        print(f"  FAIL {word}: no MP3 found on page")
        return False

    mp3_url = m.group(1)
    try:
        req2 = urllib.request.Request(mp3_url, headers=HEADERS)
        data = urllib.request.urlopen(req2, timeout=15).read()
        with open(out_path, "wb") as f:
            f.write(data)
        size_kb = len(data) / 1024
        print(f"  OK   {word} ({size_kb:.1f} KB)")
        return True
    except Exception as e:
        print(f"  FAIL {word}: download error {e}")
        return False

if __name__ == "__main__":
    words = sys.argv[1:]
    if not words:
        print("Usage: python3 download_word_audio.py word1 word2 ...")
        sys.exit(1)

    ok = 0
    for w in words:
        w = w.strip().lower()
        if download(w):
            ok += 1
        time.sleep(1.5)  # be polite to the server

    print(f"\nDone: {ok}/{len(words)} downloaded to {AUDIO_DIR}")
