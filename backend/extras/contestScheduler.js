import cron from 'node-cron'
import Contest from '../models/contestModel.js'

const markContestAsExpired = async () => {
    try {
        const contests = await Contest.find({ expired: false });

        contests.forEach(async(contest) => {
            const { start_date, duration } = contest;

            const endDate = new Date(start_date)
            endDate.setDate(endDate.getDate() + duration)

            if(new Date() > endDate){
                await Contest.findByIdAndUpdate(contest._id, { expired: true })
            }
        });

        console.log("Contest marked as expired");
    } catch (error) {
        console.log("Error in marking contest as expired", error);
    }
}

cron.schedule('0 0 * * *', markContestAsExpired); //will run every day at midnight