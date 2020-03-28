import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';

// const Fundraiser = require('../User/fundraiser').fundRaiserSchema;
import { VoteSchema, Vote } from "./Vote";
//Project schema
export const ProjectSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'Creator',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    fundGoal: {
        type: Number,
        required: true
    },
    raisedFunding: {
        type: Number,
        default: 0
    },
    // createdDate: {
    //     type: Date,
    //     default: Date.now()
    // },
    endDate: {
        type: Date,
        required: true
    },
    funders: {
        type: [Schema.Types.ObjectId],
        ref: 'Fund'
    },
    votes: {
        type: [VoteSchema]
    },
    comments: {
        type: [Schema.Types.ObjectId],
        ref: 'Comment'
    },
    // medias: {
    //     type: [Media]
    // }

});

ProjectSchema.methods.addFunder = function (fundId) {
    this.funders.push(id);
};

ProjectSchema.methods.checkVote = function (owner) {
    this.votes.forEach(vote => {
        if (vote.owner == owner) {
            return true;
        }
    });
    return false
};

ProjectSchema.methods.addVote = function (upVote, owner) {
    this.votes.forEach(vote => {
        if (vote.owner == owner) {
            vote.upVote == upVote;
            return;
        }
    });
    vote = new Vote({ upVote, owner });
    this.votes.push(vote);

};

ProjectSchema.plugin(timestamps);

ProjectSchema.index({ createdAt: 1, updatedAt: 1 });

const Project = mongoose.model("Project", ProjectSchema);
module.exports = {
    Project,
    ProjectSchema
};