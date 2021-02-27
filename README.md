# Role granter
Simple discord bot that grants roles based on emoji clicked.
Names of roles and emojis have to be identical in order to work.

## example config.json
```json
{
    "credentials"   : {
        "discordApiKey" : "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    },
    "commands"      : {
        "!rg"           : {
            "prefix"    : "c_",
            "title"     : "Choose your color!",
            "text"      : "Click an emoji to change your color on server.",
            "img"       : "https://cdn.discordapp.com/attachments/567589102803746853/806086398046109696/paint-brush.png"
        },
        "!pick_game"    : {
            "prefix"    : "g_",
            "title"     : "Choose your game!",
            "text"      : "Click an emoji to enable access to game channels."
        }
    }
}
```