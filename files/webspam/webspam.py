# aki0.dev

import ctypes
import requests
import threading
import time
from pyfiglet import figlet_format
from pystyle import Colors, Colorate

def set_console_title(title):
    ctypes.windll.kernel32.SetConsoleTitleW(title)

def send_webhook():
    url = webhook_url
    data = {
        "content": webhook_msg
    }
    {
        "username" : webhook_usr
    }

    try:
        for _ in range(webhook_amn):
            response = requests.post(url, json=data)
            if response.status_code == 204:
                print(Colorate.Horizontal(Colors.green_to_white, f"[+] Message sent successfully! Status code: {response.status_code}"))
            else:
                print(Colorate.Horizontal(Colors.red_to_white, f"[X] Message not sent! Status code: {response.status_code}"))
    except Exception as e:
        print(Colorate.Horizontal(Colors.red_to_white, f"[X] Error! Code: {e}"))

def background():
    while True:
            set_console_title("[/] webspam | made by aki0")
            time.sleep(0.08)
            set_console_title("[―] webspam | made by aki0")
            time.sleep(0.08)
            set_console_title("[\] webspam | made by aki0")
            time.sleep(0.08)
            set_console_title("[|] webspam | made by aki0")
            time.sleep(0.08)

b = threading.Thread(name='background', target=background)
b.start()
text = figlet_format("webspam", font="Cybermedium")
print(Colorate.Horizontal(Colors.purple_to_blue, "―――――――――――――――――――――――――――――――――――"))
print(Colorate.Horizontal(Colors.purple_to_blue, text, 1))
print(Colorate.Horizontal(Colors.purple_to_blue, "          made by aki0"))
print(Colorate.Horizontal(Colors.purple_to_blue, "―――――――――――――――――――――――――――――――――――"))
webhook_url = input(Colorate.Horizontal(Colors.purple_to_blue, '[?] Enter webhook URL: '))
webhook_usr = input(Colorate.Horizontal(Colors.purple_to_blue, '[?] Enter username: '))
webhook_msg = input(Colorate.Horizontal(Colors.purple_to_blue, '[?] Enter msg content: '))
webhook_amn = int(input(Colorate.Horizontal(Colors.purple_to_blue, '[?] Enter msg amount: ')))
print(Colorate.Horizontal(Colors.purple_to_blue, "―――――――――――――――――――――――――――――――――――"))

threads = []
for _ in range(webhook_amn):
    thread = threading.Thread(target=send_webhook)
    threads.append(thread)
    thread.start()

for thread in threads:
        thread.join()