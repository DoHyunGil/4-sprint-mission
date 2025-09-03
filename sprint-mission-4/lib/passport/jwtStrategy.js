import TOKEN from "../constants/jwt.tokens.js";
import { Strategy as JwtStrategy } from "passport-jwt";
import prisma from "../prisma.js";

const accessTokenOptions = {
  jwtFromRequest: (req) => req.cookies[TOKEN.ACCESS_TOKEN_COOKIE_NAME],
  secretOrKey: TOKEN.JWT_ACCESS_TOKEN_SECRET,
};

const refreshTokenOptions = {
  jwtFromRequest: (req) => req.cookies[TOKEN.REFRESH_TOKEN_COOKIE_NAME],
  secretOrKey: TOKEN.REFRESH_TOKEN_COOKIE_NAME,
};

async function jwtVerify(payload, done) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: payload.sub },
    });
    done(null, user);
  } catch (err) {
    done(error, false);
  }
}

export const accessTokenStrategy = new JwtStrategy(
  accessTokenOptions,
  jwtVerify
);

export const refreshTokenStrategy = new JwtStrategy(
  refreshTokenOptions,
  jwtVerify
);
