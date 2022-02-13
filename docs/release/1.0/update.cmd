@echo off
color 3
title Sana Client Updater
echo Hello, we're about to update Sana Client for you! (:
echo This may take a few minutes depending on your wifi speed, and hard drive speed...
echo preparing...
timeout /t 2 /nobreak
echo.

cd..\..\
echo Downloading updates...
echo.
curl -o bin.zip https://sanaclient.xyz/release/1.0/bin.zip
curl -o sc.new https://sanaclient.xyz/release/1.0/sc.new
echo Deleting Sana Client Launcher...
del /f /s /q ".\Sana Client.exe"
echo.
echo Extracting new files...
tar -xf bin.zip
echo done
echo.
echo Copying new launcher...
echo.
echo Renaming launcher...
ren sc.new "Sana Client.exe"
echo.
echo **************
echo      DONE
echo **************
pause
echo.
echo Sana Client ver 1.0 has been loaded onto your system...
echo feel free to use Sana Client!
echo SanaClient.xyz/release/1.0
echo.
pause
del /f /s /q bin.zip
del /f /s /q .\bin\resources\update.cmd
exit
