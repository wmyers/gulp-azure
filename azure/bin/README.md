##Azure custom node install

If you want to install a custom version of Node on azure you need to download the `node.exe` file (`win-x64` or `win-x86`) from the relevant link at <https://nodejs.org/en/download/releases/> and put it in this `bin` folder.

Then uncomment the line in `IISNode.yml`:
```
nodeProcessCommandLine: "D:\home\site\wwwroot\bin\node.exe"
```
