# aki0.dev

import wmi
import winsound
from pystyle import Colors, Colorate
import os
import socket
import uuid
import subprocess
import cpuinfo
import platform
import re
import threading
import time
import GPUtil

hostname = socket.gethostname()
IPAddr = socket.gethostbyname(hostname)
stop_flag = False

def background():
    os.system("mode 20, 2")
    while True:
        os.system('cls')
        print("Loading.")
        time.sleep(0.2)
        os.system('cls')
        print("Loading..")
        time.sleep(0.2)
        os.system('cls')
        print("Loading...")
        time.sleep(0.2)
        if stop_flag:
            break

def stop_background():
    global stop_flag
    stop_flag = True
    os.system('cls')

def get_gpu_name():
    try:
        gpus = GPUtil.getGPUs()
        
        if len(gpus) > 0:
            return gpus[0].name
        else:
            return "Error: GPU Not Found"
    
    except Exception as e:
        return f"Error: {e}"

def main():
    os.system("mode 20, 2")
    os.system("title ✦ HWID-CHECKER ┇ Made by aki0 ┇ dsc.gg/aktool ✦")
    os.system('cls')
    winsound.Beep(300, 400)
    os.system('cls')
    os.system('cls')
    b = threading.Thread(name='background', target=background)
    b.start()
    c = wmi.WMI()
    system_info = c.Win32_ComputerSystemProduct()[0]
    system_info = []
    hwid_info = c.Win32_ComputerSystemProduct()[0]
    hwid = hwid_info.UUID
    uname = platform.uname()
    result_model = subprocess.run(['wmic', 'baseboard', 'get', 'product'], capture_output=True, text=True)
    result_manufacturer = subprocess.run(['wmic', 'baseboard', 'get', 'manufacturer'], capture_output=True, text=True)
    gpu_name = get_gpu_name()
    if result_model.returncode == 0 and result_manufacturer.returncode == 0:
        model = result_model.stdout.strip().split('\n')[-1].strip()
        manufacturer = result_manufacturer.stdout.strip().split('\n')[-1].strip()
        system_info.append("-----------------------------MOTHERBOARD-----------------------------")
        system_info.append(f"HWID: {hwid}")
        system_info.append(f"MANUFACTURER: {manufacturer}")
        system_info.append(f"MODEL: {model}")
        system_info.append("----------------------------------OS---------------------------------")
        system_info.append(f"PC NAME: {uname.node}")
        system_info.append(f"SYSTEM: {uname.system}")
        system_info.append(f"MACHINE: {uname.machine}")
        system_info.append("----------------------------------PC---------------------------------")
        system_info.append(f"CPU: {cpuinfo.get_cpu_info()['brand_raw']}")
        system_info.append(f"GPU: {gpu_name}")
        system_info.append("-------------------------------NETWORK-------------------------------")
        system_info.append(f"IP: {socket.gethostbyname(socket.gethostname())}")
        system_info.append(f"MAC: {':'.join(re.findall('..', '%012x' % uuid.getnode()))}")
        system_info.append("---------------------------------------------------------------------")
        system_info.append("--> made by aki0 <--   --> dsc.gg/aktool <--   --> guns.lol/aki0 <-- ")
        pc_info = "\n".join(system_info)
        os.system('cls')
        stop_background()
        os.system('cls')
        winsound.Beep(700, 200)
        winsound.Beep(700, 200)
        os.system('cls')
        time.sleep(0.2)
        os.system('cls')
        os.system("mode 69, 17")
        print(Colorate.Horizontal(Colors.white_to_green, f'{pc_info}'))
        input(Colorate.Horizontal(Colors.white_to_green, "---------------------------------------------------------------------"))
        os.system('cls')

if __name__ == '__main__':
    main()