const Data = require("../models/dataModel");

exports.createData = async (req, res) => {
    try {
        const data = await Data.create(req.body);
        res.status(201).json({
            status: "success",
            data
        });
    } catch (err) {
        res.status(400).json({
            status: "Failed to write data in database",
            message: err.message
        });
    }
};

exports.getAllData = async (req, res) => {
    try {
        const data = await Data.find();
        res.status(200).json({
            status: "success",
            data
        });
    } catch(err) {
        res.status(400).json({
            status: "Failed to read data from database",
            message: err.message
        });
    }
};

exports.getDataByID = async (req, res) => {
    try {
        const data = await Data.findById(req.params.id);
        if (!data) {
            return res.status(404).json({
                status: "failed",
                message: "Data not found"
            });
        }
        res.status(200).json({
            status: "success",
            data
        });
    } catch (err) {
        res.status(400).json({
            status: "Failed to read data from database",
            message: err.message
        });
    }
};

exports.updateDataById = async (req, res) => {
    try {
        const data = await Data.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!data) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.json(data);
    } catch (err) {
        res.status(400).json({
            status: "Failed to update data in database",
            message: err.message
        });
    }
};

exports.deleteDataById = async (req, res) => {
    try {
        const data = await Data.findByIdAndDelete(req.params.id);
        if (!data) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.status(204).json(null);
    } catch (err) {
        res.status(400).json({
            status: "Failed to delete data from database",
            message: err.message
        });
    }
};

exports.getPriceDataByID = async (req, res) => {
    try {
        const data = await Data.findById(req.params.id);
        if (!data) {
            return res.status(404).json({
                status: "failed",
                message: "Data not found"
            });
        }
        const priceData = {
            priceNative: data.priceNative,
            priceUsd: data.priceUsd,
            priceChange: data.priceChange
        };
        res.status(200).json({
            status: "success",
            priceData
        });
    } catch (err) {
        res.status(400).json({
            status: "Failed to read data from database",
            message: err.message
        });
    }
};

exports.getVolumeDataByID = async (req, res) => {
    try {
        const data = await Data.findById(req.params.id);
        if (!data) {
            return res.status(404).json({
                status: "failed",
                message: "Data not found"
            });
        }
        const volumeData = {
            volume: data.volume
        };
        res.status(200).json({
            status: "success",
            volumeData
        });
    } catch (err) {
        res.status(400).json({
            status: "Failed to read data from database",
            message: err.message
        });
    }
};

exports.getPriceVolumeDataByID = async (req, res) => {
    try {
        const data = await Data.findById(req.params.id);
        if (!data) {
            return res.status(404).json({
                status: "failed",
                message: "Data not found"
            });
        }
        const priceVolumeData = {
            priceNative: data.priceNative,
            priceUsd: data.priceUsd,
            priceChange: data.priceChange,
            volume: data.volume
        };
        res.status(200).json({
            status: "success",
            priceVolumeData
        });
    } catch (err) {
        res.status(400).json({
            status: "Failed to read data from database",
            message: err.message
        });
    }
};