-- CreateTable
CREATE TABLE `Access` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(191) NOT NULL,
    `end_point` VARCHAR(191) NOT NULL,
    `method` VARCHAR(191) NOT NULL,
    `Module` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Access_uuid_key`(`uuid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User_Access` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uuid` VARCHAR(191) NOT NULL,
    `user_id` INTEGER NOT NULL,
    `access_id` INTEGER NOT NULL,

    UNIQUE INDEX `User_Access_uuid_key`(`uuid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User_Access` ADD CONSTRAINT `User_Access_access_id_fkey` FOREIGN KEY (`access_id`) REFERENCES `Access`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_Access` ADD CONSTRAINT `User_Access_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
