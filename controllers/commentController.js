import Comment from '../models/commentModel.js';


const createComment = async(req, res) => {
    try {
        const comment = await Comment.create(req.body);
        res.status(201).json({
            succeded: true,
            comment,
        });
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error,
        });
    }
};


const getAllComment = async (req, res) => {
    try {
        const comments = await Comment.find({});
        res.status(200).json({
            succeeded: true,
            comments,
        });
    } catch (error) {
        res.status(500).json({
            succeeded: false,
            error,
        });
    }
};

export {createComment, getAllComment};