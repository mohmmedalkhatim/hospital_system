-- CreateTable
CREATE TABLE "Doctor" (
    "Id" TEXT NOT NULL PRIMARY KEY,
    "Name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "birthDate" DATETIME NOT NULL,
    "Doctor_role" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Patient" (
    "Id" TEXT NOT NULL PRIMARY KEY,
    "Name" TEXT NOT NULL,
    "birthDate" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Record" (
    "Id" TEXT NOT NULL PRIMARY KEY,
    "patient_id" TEXT NOT NULL,
    "files" BLOB NOT NULL,
    "patientId" TEXT,
    CONSTRAINT "Record_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient" ("Id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Session" (
    "Id" TEXT NOT NULL PRIMARY KEY,
    "time" DATETIME NOT NULL,
    "doctorId" TEXT,
    "patientId" TEXT,
    CONSTRAINT "Session_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor" ("Id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Session_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient" ("Id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "admie" (
    "ID" TEXT NOT NULL PRIMARY KEY,
    "Name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Doctor_Id_key" ON "Doctor"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "Doctor_Email_key" ON "Doctor"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "Patient_Id_key" ON "Patient"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "Record_Id_key" ON "Record"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "Session_Id_key" ON "Session"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "admie_ID_key" ON "admie"("ID");

-- CreateIndex
CREATE UNIQUE INDEX "admie_Name_key" ON "admie"("Name");

-- CreateIndex
CREATE UNIQUE INDEX "admie_Email_key" ON "admie"("Email");
