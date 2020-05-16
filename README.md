# Test version of the app on heroku:
https://crwn-test-app-live.herokuapp.com/

# After you fork and clone:
## Set your firebase config

Remember to replace the `config` variable in your `firebase.utils.js` with your own config object from the firebase dashboard! Navigate to the project settings and scroll down to the config code. Copy the object in the code and replace the variable in your cloned code.

![alt text](https://i.ibb.co/6ywMkBf/Screen-Shot-2019-07-01-at-11-35-02-AM.png "image to firebase config")


## Set your stripe publishable key 

Set the `publishableKey` variable in the `stripe-button.component.jsx` with your own publishable key from the stripe dashboard.

![alt text](https://i.ibb.co/djQTmVF/Screen-Shot-2019-07-01-at-2-18-50-AM.png "image to publishable key")

## Add a .env file to the root folder

Remember to add a file called `.env` to the root folder! In that `.env` file remember to add a `STRIPE_SECRET_KEY` value equal to your own secret key from your stripe dashboard. You can find it in the same place where you found your publishable key in the developers tab under api keys. You will have to enter the password in to reveal it! 

![alt text](https://i.ibb.co/wpLx8Lh/Screen-Shot-2019-07-01-at-2-26-26-AM.png "image to secret key")

