import jwt from 'jsonwebtoken';
const { verify } = jwt;
// Create a middleware function that blocks unauthicated users from triggering user ONLY routes
export const blockGuests = (req, res, next) => {
    // TODO: Retrieve the token cookie from req.cookies
    const token = req.cookies?.token;
    // TODO: If the token cookie does not exist, send a 401 json response message and return
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    // TODO: If the token exists, validate it with the verify function, ( ie. verify(token, process.env.JWT_SECRET) )
    try {
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        // TODO: If it verifies, call next to move the request on to the controller function
        verify(token, secret);
        next();
        // TODO: If it doesn't verify send a 401 json response message and DO NOT call next
    }
    catch (err) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    return;
};
