import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>,private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET, // Ensure this matches the secret in JwtModule configuration
    });
  }

  async validate(payload: any): Promise<User> {
    const { id } = payload;
    const user = await this.userModel.findById(id).exec(); // Use exec() for proper querying
    if (!user) {
      throw new UnauthorizedException('Please, login first to see this resource');
    }
    return user;
  }
}