# react-survey-server

The first URI returned from Google during OAuth2.0:

https://accounts.google.com/o/oauth2/v2/auth?
response_type=code&
redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback&s
cope=profile%20email&
client_id=965395914281d093v8i668h5fofgahe45i8mplsfq36h.apps.googleusercontent.com

The second URI returned from Google which gives the code:

http://localhost:5000/auth/google/callback?
code=4/pwCHQD0n1T7H6UMOr_lPqJ_VATQ7q-mNhZZu0WN1UsL-FUrkcel7sj2bWxP9H36frM5cfT3Rv0Ww_Z0Esc9LAYA&
scope=email%20profile%20https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/userinfo.email
