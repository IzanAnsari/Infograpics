const Product = require("../models/db");

const getAllProducts = async (req, res) => {
    try {
        const myData = await Product.find(req.query);
        res.status(200).json({ myData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};



const getAllProductsTesting = async (req, res) => {
    const { sector, region, end_year,pestle,topic,source,country } = req.query;
    const queryObject = {};

    if (sector) {
        queryObject.sector = sector;
    }

    if (end_year) {
        queryObject.end_year = end_year;
    }

    if (pestle) {
        queryObject.pestle = pestle;
    }

    if (topic) {
        queryObject.topic = topic;
    }

    if (source) {
        queryObject.source = source;
    }

    if (country) {
        queryObject.country = country;
    }

    if (region) {
        queryObject.region = { $regex: region, $options: "i" };
    }

    let page = Number(req.query.page) || 1;
    let limit = 10;

    let skip = (page - 1) * limit;

    try {
        const apiData = await Product.find(queryObject)
            .skip(skip)
            .limit(limit);

        res.status(200).json({ myData: apiData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getAllProducts, getAllProductsTesting };
