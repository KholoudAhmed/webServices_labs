const hateos = {
    getBlogsHateos: (scheme, hostname) => ({
        "selfUrl": `${scheme}${hostname}/blogs`,
        "blogUrl":  `${scheme}${hostname}/blogs/{blogId}`,
    }),

    getArtcleHateos: (scheme, hostname) => ({
        "selfUrl": `${scheme}${hostname}/articles`,
        "articleUrl":  `${scheme}${hostname}/articles/{articleId}`,
    })
}



module.exports = hateos