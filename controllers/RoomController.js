exports.index = (req, res, next) => {
    const roomId = req.params.room;
    // console.log(roomId);

    res.render('room', {
        roomId: roomId
    });
}