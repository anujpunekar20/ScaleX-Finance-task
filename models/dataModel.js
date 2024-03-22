const mongoose = require('mongoose');

// Defining sub-schemas for transactions, token details, URLs, and social media links
const txnSchema = new mongoose.Schema({
    buys: Number,
    sells: Number
}, { _id: false });

const tokenSchema = new mongoose.Schema({
    address: String,
    name: String,
    symbol: String
}, { _id: false });

const urlSchema = new mongoose.Schema({
    label: String,
    url: String
}, { _id: false });

const socialSchema = new mongoose.Schema({
    type: String,
    url: String
}, { _id: false });

//Main schema for the data
const dataSchema = new mongoose.Schema({
    _id: String,
    chainId: String,
    dexId: String,
    url: String,
    pairAddress: String,
    baseToken: tokenSchema,
    quoteToken: tokenSchema,
    priceNative: String,
    priceUsd: String,
    txns: {
        m5: txnSchema,
        h1: txnSchema,
        h6: txnSchema,
        h24: txnSchema
    },
    volume: {
        h24: Number,
        h6: Number,
        h1: Number,
        m5: Number
    },
    priceChange: {
        m5: Number,
        h1: Number,
        h6: Number,
        h24: Number
    },
    liquidity: {
        usd: Number,
        base: Number,
        quote: Number
    },
    pairCreatedAt: Number,
    info: {
        imageUrl: String,
        websites: [urlSchema],
        socials: [socialSchema]
    }
});

module.exports = mongoose.model('Data', dataSchema, 'ScaleX Finance');
