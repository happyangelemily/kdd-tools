#!/usr/bin/env python3
"""Generate 41b (ure) book narration via edge-tts, 44.1kHz mono."""
import subprocess, os

pages = [
    "A doctor has a cure. It is a little blue pill. It makes sick kids feel well.",
    "A girl drinks pure water. It is clean and cool. She feels strong again.",
    "Are you sure? asks the doctor. Yes, I am sure! says the girl. She gives a big smile.",
    "The cure works its magic. The girl runs and plays. She is full of joy.",
    "The doctor has a pure heart. He helps kids every day. He never gives up.",
    "The girl is strong and brave. She says thank you to the doctor. She is sure she will be well.",
    "At last, the girl is all better. The cure did its job. Everyone is happy and glad.",
    "The doctor is sure of one thing. Helping others is the best cure. What a pure, good deed!",
]

voices = {'uk': 'en-GB-SoniaNeural', 'us': 'en-US-JennyNeural'}
outdir = '/mnt/d/tools-site/english/audio/book'

for i, text in enumerate(pages, 1):
    for accent, voice in voices.items():
        tmp = f'/tmp/41b_page{i}_{accent}.mp3'
        out = f'{outdir}/41b-page{i}-{accent}.mp3'
        subprocess.run(['edge-tts', '--voice', voice, '--text', text, '--write-media', tmp],
                       check=True, capture_output=True)
        subprocess.run(['ffmpeg', '-y', '-i', tmp, '-acodec', 'libmp3lame', '-ar', '44100',
                        '-ac', '1', '-ab', '128k', '-map_metadata', '-1', out],
                       check=True, capture_output=True)
        os.remove(tmp)
        print(f'OK 41b-page{i}-{accent}.mp3 ({os.path.getsize(out)} bytes)')

print('DONE 16 files')
