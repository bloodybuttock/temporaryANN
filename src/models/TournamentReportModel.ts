import * as mongoose from "mongoose";
import ItournamentReport from "./interfaces/TournamentReportInterface";

const tournamentReportSchema = new mongoose.Schema({
  participant: [
    {
      _groupId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Group",
      },
      _userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      score: { type: Number, default: null },
    },
  ],
  _tournamentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tournament",
    required: true,
  },
  // stageName: {
  //   type: String,
  //   enum: [
  //     "participantList",
  //     "aboutToBegin",
  //     "shuffling",
  //     "64Elimination",
  //     "32Elimination",
  //     "16Elimination",
  //     "8Elimination",
  //     "semifinal",
  //     "third",
  //     "final",
  //     "result",
  //   ],
  stageName: {
    type: Number,
    default: 0,
  },
});

const TournamentReport = mongoose.model<ItournamentReport>(
  "Report",
  tournamentReportSchema
);
export default TournamentReport;
