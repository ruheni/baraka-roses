# Migration `20200630225749-db-update-2`

This migration has been generated at 6/30/2020, 10:57:49 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TYPE "Role" AS ENUM ('SALES_EXEC', 'GENERAL_MANAGER', 'STOCK_CLERK', 'ADMIN');

CREATE TYPE "Grade" AS ENUM ('GRADED', 'UNGRADED');

CREATE TYPE "Color" AS ENUM ('WHITE', 'LILAC', 'PINK', 'CERISE', 'RED', 'ORANGE', 'YELLOW', 'PEACH', 'BI_COLOUR');

CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'REVIEWED', 'CANCELLED');

CREATE TABLE "public"."Customer" (
"contactName" text  NOT NULL ,"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,"email" text  NOT NULL ,"id" SERIAL,"market" text  NOT NULL ,"name" text  NOT NULL ,"phoneNumber" text  NOT NULL ,
    PRIMARY KEY ("id"))

CREATE TABLE "public"."Order" (
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,"customerId" integer   ,"date" timestamp(3)  NOT NULL ,"finalQuantity" integer  NOT NULL ,"id" SERIAL,"initialQuantity" integer  NOT NULL ,"status" "OrderStatus" NOT NULL ,
    PRIMARY KEY ("id"))

CREATE TABLE "public"."Product" (
"color" "Color" NOT NULL ,"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,"grade" "Grade" NOT NULL ,"id" SERIAL,"length" integer  NOT NULL ,"orderId" integer   ,"quantity" integer  NOT NULL ,"variety" text  NOT NULL ,
    PRIMARY KEY ("id"))

CREATE TABLE "public"."Agent" (
"customerId" integer   ,"email" text  NOT NULL ,"id" SERIAL,"name" text  NOT NULL ,"phoneNumber" text  NOT NULL ,
    PRIMARY KEY ("id"))

CREATE TABLE "public"."User" (
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,"email" text  NOT NULL ,"firstName" text  NOT NULL ,"id" SERIAL,"lastName" text  NOT NULL ,"password" text  NOT NULL ,"role" "Role" NOT NULL ,
    PRIMARY KEY ("id"))

CREATE UNIQUE INDEX "Customer.email" ON "public"."Customer"("email")

ALTER TABLE "public"."Order" ADD FOREIGN KEY ("customerId")REFERENCES "public"."Customer"("id") ON DELETE SET NULL  ON UPDATE CASCADE

ALTER TABLE "public"."Product" ADD FOREIGN KEY ("orderId")REFERENCES "public"."Order"("id") ON DELETE SET NULL  ON UPDATE CASCADE

ALTER TABLE "public"."Agent" ADD FOREIGN KEY ("customerId")REFERENCES "public"."Customer"("id") ON DELETE SET NULL  ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200627022502-project-init..20200630225749-db-update-2
--- datamodel.dml
+++ datamodel.dml
@@ -1,18 +1,19 @@
 datasource postgres {
     provider = "postgres"
-    url = "***"
+    url = "***"
 }
 model Customer {
-    id             Int             @id @default(autoincrement())
-    name           String
-    contactName    String
-    market         String
-    email          String
-    phoneNumber    String
-    orders         Order[]
-    shippingAgents ShippingAgent[]
+    id          Int      @id @default(autoincrement())
+    name        String
+    contactName String
+    market      String
+    email       String   @unique
+    phoneNumber String
+    orders      Order[]
+    agents      Agent[]
+    createdAt   DateTime @default(now())
 }
 model Order {
     id              Int         @id @default(autoincrement())
@@ -26,19 +27,20 @@
     createdAt       DateTime    @default(now())
 }
 model Product {
-    id       Int    @id @default(autoincrement())
-    color    Color
-    length   Int
-    grade    Grade
-    variety  String
-    quantity Int
-    Order    Order? @relation(fields: [orderId], references: [id])
-    orderId  Int?
+    id        Int      @id @default(autoincrement())
+    color     Color
+    length    Int
+    grade     Grade
+    variety   String
+    quantity  Int
+    Order     Order?   @relation(fields: [orderId], references: [id])
+    orderId   Int?
+    createdAt DateTime @default(now())
 }
-model ShippingAgent {
+model Agent {
     id          Int       @id @default(autoincrement())
     name        String
     phoneNumber String
     email       String
@@ -46,14 +48,15 @@
     customerId  Int?
 }
 model User {
-    id        Int    @id @default(autoincrement())
+    id        Int      @id @default(autoincrement())
     firstName String
     lastName  String
     email     String
     password  String
     role      Role
+    createdAt DateTime @default(now())
 }
 enum Role {
     SALES_EXEC
@@ -83,4 +86,8 @@
     PENDING
     REVIEWED
     CANCELLED
 }
+
+generator prisma_client {
+    provider = "prisma-client-js"
+}
```
