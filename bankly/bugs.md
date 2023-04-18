bug #1: does not forbid user from using same email or phonenumber

    Solved: Unique added to data.sql AND logic to check for existing email added to user model checkEmail under User static method "register"

Bug #2: responds with 200 status code when password is incorrect

bug #3: (possibly) token should not be returned in the query string

Bug #4: get/users should NOT return email, phoneNumber, OR password
    SOLVED: in ./models/users.js .getAll() method, I removed extra information from SQL query

Bug #5: users/:username does not return 404 when user does not exist
    <!-- Little stuck on why the 404 handler is not working -->

bug #6: User is forbidden from editing their own data (admin works)

Bug #7: Returns 200 when attempting to change password with patch

Bug #8: returns 200 instead of 404 when deleting nonexistent user


<!-- First bug found in routes/auth.js

const router = express.Router()
should be:
    const router = new express.Router() -->