import LocalStrategy from "passport-local";
import prisma from "../prisma";
import bcrypt from "bcrypt";

export const localStrategy = new LocalStrategy(
  async (username, password, done) => {
    const user = await prisma.user.findUnique({ where: username });

    if (!user) {
      return done(null, false);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return done(null, false);
    }

    done(null, user);
  }
);
