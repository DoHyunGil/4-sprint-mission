import passport from "passport";
import prisma from "../prisma.js";
import { localStrategy } from "./localStrategy.js";

passport.use("local", localStrategy);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await prisma.user.findUnique({ where: { id } });
  done(null, user);
});
