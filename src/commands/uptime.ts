import { Message } from "revolt.js/dist/maps/Messages";
import { strings } from "../i18n/en_GB";
import prettyMilliseconds from 'pretty-ms';

export const name = "uptime";
export const aliases = ["up"];
export const description = "Uptime!";
export const category = "Misc";
export const developer = false;
export const serverOnly = false;
export async function run(msg, args, client) {

 msg.channel?.sendMessage({
        content: " ",
        embeds: [
            {
                type: "Text",
                title: `Uptime:`,
                description: (`
\`${prettyMilliseconds(Math.round(process.uptime()) * 1000)}\`
`),
                colour: strings.embeds.accent,
            },
        ]
    }).catch(err => {
            // msg.channel?.sendMessage("# Permission error\nMake sure the bot has a role with the Manage Channels permission." + err);
                });
}
;