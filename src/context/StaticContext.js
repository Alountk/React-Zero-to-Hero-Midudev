import React from 'react'

const Context = React.createContext({
    name: 'without-provider',
    subscribedToTheChannel: true
})

export default Context;