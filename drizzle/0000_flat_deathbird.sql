CREATE TABLE IF NOT EXISTS "cards" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" varchar(100),
	"list_id" uuid
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "lists" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" varchar(100)
);
