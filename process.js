const express = require('express')

function runOne() {
    process.on('uncaughtException', (uncaughtException) => {
        console.log(uncaughtException)
    })

    throw new Error('uncaught ? or am I')
}

runOne()