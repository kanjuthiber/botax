export default {
    name: 'instagram',
    aliases: ['ig', 'igdl'],
    type: 'download',
    desc: 'downloader video and photo instagram',
    example: 'yg bener la dek\n\nContoh : %prefix%command https://www.instagram.com/reel/CqIrJimDXtD/?igshid=NTc4MTIwNjQ2YQ==',
    execute: async({ hisoka, m }) => {
        let request = await (new api('xzn')).get('/api/igdl', { url: Func.isUrl(m.body)[0] })
        if (request.data?.err) return mess('error', m)
        for (let result of request.data.media) {
            hisoka.sendMessage(m.from, result, { caption: request.data.caption })
        }
    },
    isLimit: true
}