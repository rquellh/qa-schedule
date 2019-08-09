// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const events = require('./static/data.json')
const nodeExternals = require('webpack-node-externals')

module.exports = function (api) {
  //Whitelist Vuetify
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          whitelist: [/^vuetify/]
        })
      ])
    }
  })

  //Load the conference data
  for (const event of events) {
    api.loadSource(store => {
      const contentType = store.addContentType({
        typeName: 'Session'
      })

      for (const session of event.sessions) {
        var speaker = session.speaker.replace(/\s/g, '')
        var path = `/${event.year}/${speaker}`

        contentType.addNode({
          id: undefined,
          title: session.title,
          path,
          fields: {
            speaker: session.speaker,
            speaker2: session.speaker2,
            bio: session.bio,
            bio2: session.bio2,
            title: session.title,
            abstract: session.abstract,
            year: event.year,
            time: session.time,
            room: session.room,
          }
        })
      }
    })
  }


}
