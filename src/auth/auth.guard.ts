import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _jwtService: JwtService) {}
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    let {token} = request.headers
    if (!token) throw new UnauthorizedException();
    try {
      const payload =  this._jwtService.verifyAsync(
        token,
        {
          secret: 'key',
        }
      );
      request.user = payload;
    } catch {
      throw new UnauthorizedException();
    }

    return true;
  }
}
