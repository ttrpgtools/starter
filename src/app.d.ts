import type { UserType } from '@kinde-oss/kinde-auth-sveltekit';
import type { AnyD1Database } from 'drizzle-orm/d1';
import type { ORM } from '$lib/server/db';

declare global {
	namespace App {
		interface Platform {
			env: {
				DB: AnyD1Database;
			};
			cf: CfProperties;
			ctx: ExecutionContext;
		}
		interface Locals {
			user?: UserType;
			permissions: Set<string>;
			db: ORM;
		}
	}
}

export {};
