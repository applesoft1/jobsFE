const Interview = require('../Models/interviewModel')


exports.CreateNewInterview = async (req, res) => {
    try {
        console.log(req.body);
        const { date, time, link, userId } = req.body
        var createInterview = await Interview.create({
            UserId: userId,
            Date: date,
            Time: time,
            link: link,
        })
        createInterview.save()
        if (createInterview) res.json({ success: "Interview added Successfully"})
    }
    catch {
        res.json({ error: "Interview creation fail" })
    }
}


exports.allIntreviews = async (req, res) => {
    var allIntreview = await Interview.find({}).lean()
    res.send(allIntreview)
}



exports.OneIntreview = async (req, res) => {
    var id = req.params.id
    var oneinterview = await Interview.findOne({ _id: id }).lean()
    res.send(oneinterview)
}