export default {
    name: 'twitter',
    aliases: ['twitterdl'],
    type: 'download',
    desc: 'downloader video twitter',
    example: 'yg bener la dek\n\nContoh : %prefix%command https://twitter.com/AMAZlNGNATURE/status/1656514215665082368?s=19',
    execute: async({ hisoka, m }) => {
        let request = await (new api('xzn')).get('/api/twitterdl', { url: Func.isUrl(m.body)[0] })
        if (request.data?.err) return mess('error', m)
        for (let result of request.data.media) {
            hisoka.sendMessage(m.from, result, { caption: request.data.caption })
        }
    },
    isLimit: true
}