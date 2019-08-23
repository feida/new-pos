/*
 Navicat Premium Data Transfer

 Source Server         : new_pos
 Source Server Type    : SQLite
 Source Server Version : 3012001
 Source Schema         : main

 Target Server Type    : SQLite
 Target Server Version : 3012001
 File Encoding         : 65001

 Date: 17/05/2019 12:41:36
*/

PRAGMA foreign_keys = false;

-- ----------------------------
-- Table structure for tb_area
-- ----------------------------
DROP TABLE IF EXISTS "tb_area";
CREATE TABLE `tb_area` (`id` TEXT PRIMARY KEY, `name` TEXT, `print_id` TEXT, `shop_detail_id` TEXT);

-- ----------------------------
-- Table structure for tb_article
-- ----------------------------
DROP TABLE IF EXISTS "tb_article";
CREATE TABLE `tb_article` (`id` TEXT PRIMARY KEY, `name` TEXT, `article_family_id` TEXT, `price` INTEGER, `fans_price` INTEGER, `article_type` INTEGER, `is_empty` INTEGER, `stock_working_day` INTEGER, `stock_weekend` INTEGER, `current_working_stock` INTEGER, `activated` INTEGER, `unit` TEXT, `has_unit` TEXT, `sort` INTEGER, `eleme_name` TEXT, `virtual_id` TEXT, `initials` TEXT, `unit_id` TEXT, `shop_detail_id` TEXT, `meal_fee_number` INTEGER, `weight_package_id` TEXT, `open_catty` TINYINT(1), `catty_money` TEXT);

-- ----------------------------
-- Table structure for tb_article_attr
-- ----------------------------
DROP TABLE IF EXISTS "tb_article_attr";
CREATE TABLE `tb_article_attr` (`id` TEXT PRIMARY KEY, `name` TEXT, `sort` INTEGER, `shop_detail_id` TEXT);

-- ----------------------------
-- Table structure for tb_article_family
-- ----------------------------
DROP TABLE IF EXISTS "tb_article_family";
CREATE TABLE `tb_article_family` (`id` TEXT PRIMARY KEY, `name` TEXT, `sort` INTEGER, `shop_detail_id` TEXT);

-- ----------------------------
-- Table structure for tb_article_kitchen
-- ----------------------------
DROP TABLE IF EXISTS "tb_article_kitchen";
CREATE TABLE `tb_article_kitchen` (`id` TEXT PRIMARY KEY, `article_id` TEXT, `kitchen_id` TEXT);

-- ----------------------------
-- Table structure for tb_article_price
-- ----------------------------
DROP TABLE IF EXISTS "tb_article_price";
CREATE TABLE `tb_article_price` (`id` TEXT PRIMARY KEY, `unit_ids` TEXT, `name` TEXT, `price` INTEGER, `fans_price` INTEGER, `article_id` TEXT, `stock_working_day` INTEGER, `stock_weekend` INTEGER, `current_working_stock` INTEGER, `shop_detail_id` TEXT, `sort` INTEGER, `empty_remark` TEXT);

-- ----------------------------
-- Table structure for tb_article_support_time
-- ----------------------------
DROP TABLE IF EXISTS "tb_article_support_time";
CREATE TABLE `tb_article_support_time` (`id` TEXT PRIMARY KEY, `article_id` TEXT, `support_time_id` INTEGER);

-- ----------------------------
-- Table structure for tb_article_unit
-- ----------------------------
DROP TABLE IF EXISTS "tb_article_unit";
CREATE TABLE `tb_article_unit` (`id` INTEGER PRIMARY KEY, `name` TEXT, `tb_article_attr_id` TEXT, `sort` INTEGER);

-- ----------------------------
-- Table structure for tb_article_unit_detail
-- ----------------------------
DROP TABLE IF EXISTS "tb_article_unit_detail";
CREATE TABLE `tb_article_unit_detail` (`id` TEXT PRIMARY KEY, `unit_detail_id` TEXT, `article_unit_id` TEXT, `price` INTEGER, `is_used` INTEGER, `sort` INTEGER);

-- ----------------------------
-- Table structure for tb_article_unit_new
-- ----------------------------
DROP TABLE IF EXISTS "tb_article_unit_new";
CREATE TABLE `tb_article_unit_new` (`id` TEXT PRIMARY KEY, `article_id` TEXT, `unit_id` TEXT, `choice_type` INTEGER, `is_used` INTEGER);

-- ----------------------------
-- Table structure for tb_brand
-- ----------------------------
DROP TABLE IF EXISTS "tb_brand";
CREATE TABLE `tb_brand` (`id` TEXT PRIMARY KEY);

-- ----------------------------
-- Table structure for tb_brand_setting
-- ----------------------------
DROP TABLE IF EXISTS "tb_brand_setting";
CREATE TABLE `tb_brand_setting` (`id` TEXT PRIMARY KEY, `print_type` INTEGER, `is_allow_extra_price` INTEGER, `ali_pay` INTEGER, `open_union_pay` INTEGER, `open_shanhui_pay` INTEGER, `open_money_pay` INTEGER, `integral_pay` INTEGER, `is_use_service_price` INTEGER, `is_meal_fee` INTEGER, `open_pos_charge` INTEGER, `open_pos_reminder` INTEGER, `open_order_remark` INTEGER, `turntable` INTEGER, `open_pos_discount` INTEGER, `receipt_switche` INTEGER, `open_audit` INTEGER);

-- ----------------------------
-- Table structure for tb_change_table
-- ----------------------------
DROP TABLE IF EXISTS "tb_change_table";
CREATE TABLE `tb_change_table` (`table_name` TEXT PRIMARY KEY, `table_path` TEXT, `update_type` TEXT);

-- ----------------------------
-- Table structure for tb_charge_order
-- ----------------------------
DROP TABLE IF EXISTS "tb_charge_order";
CREATE TABLE `tb_charge_order` (`id` TEXT PRIMARY KEY, `charge_money` INTEGER, `reward_money` INTEGER, `order_state` INTEGER, `create_time` TEXT, `finish_time` TEXT, `customer_id` TEXT, `brand_id` TEXT, `shop_detail_id` TEXT, `charge_balance` INTEGER, `reward_balance` INTEGER, `total_balance` INTEGER, `number_day_now` INTEGER, `arrival_amount` INTEGER, `end_amount` INTEGER, `type` INTEGER, `charge_setting_id` TEXT);

-- ----------------------------
-- Table structure for tb_customer
-- ----------------------------
DROP TABLE IF EXISTS "tb_customer";
CREATE TABLE `tb_customer` (`id` TEXT PRIMARY KEY, `wechat_id` TEXT, `nickname` TEXT, `telephone` TEXT, `sex` INTEGER);

-- ----------------------------
-- Table structure for tb_customer_address
-- ----------------------------
DROP TABLE IF EXISTS "tb_customer_address";
CREATE TABLE `tb_customer_address` (`id` TEXT PRIMARY KEY, `name` TEXT, `sex` INTEGER, `address` TEXT, `address_reality` TEXT, `customer_id` TEXT, `state` INTEGER DEFAULT 1, `mobile_no` INTEGER);

-- ----------------------------
-- Table structure for tb_daily_log_operation
-- ----------------------------
DROP TABLE IF EXISTS "tb_daily_log_operation";
CREATE TABLE `tb_daily_log_operation` (`id` TEXT PRIMARY KEY, `shop_id` TEXT, `brand_id` TEXT, `operator` TEXT, `close_status` INTEGER, `create_time` TEXT);

-- ----------------------------
-- Table structure for tb_kitchen
-- ----------------------------
DROP TABLE IF EXISTS "tb_kitchen";
CREATE TABLE `tb_kitchen` (`id` TEXT PRIMARY KEY, `name` TEXT, `remark` TEXT DEFAULT '', `printer_id` TEXT, `shop_detail_id` TEXT, `sort` INTEGER DEFAULT 1, `begin_time` TEXT DEFAULT '09:00', `end_time` TEXT DEFAULT '23:00', `status` INTEGER DEFAULT 0);

-- ----------------------------
-- Table structure for tb_kitchen_printer_record
-- ----------------------------
DROP TABLE IF EXISTS "tb_kitchen_printer_record";
CREATE TABLE `tb_kitchen_printer_record` (`id` TEXT PRIMARY KEY, `accounting_time` TEXT, `kitchen_id` TEXT DEFAULT '', `kitchen_name` TEXT DEFAULT '', `carry_number` TEXT DEFAULT 0, `printer_id` TEXT DEFAULT '', `printer_ip` TEXT DEFAULT '', `status` INTEGER DEFAULT 0);

-- ----------------------------
-- Table structure for tb_meal_attr
-- ----------------------------
DROP TABLE IF EXISTS "tb_meal_attr";
CREATE TABLE `tb_meal_attr` (`id` TEXT PRIMARY KEY, `name` TEXT, `article_id` TEXT, `print_sort` INTEGER, `choice_type` INTEGER, `choice_count` INTEGER, `sort` INTEGER);

-- ----------------------------
-- Table structure for tb_meal_item
-- ----------------------------
DROP TABLE IF EXISTS "tb_meal_item";
CREATE TABLE `tb_meal_item` (`id` INTEGER PRIMARY KEY, `name` TEXT, `article_name` TEXT, `article_id` TEXT, `price_dif` INTEGER, `meal_attr_id` TEXT, `is_default` INTEGER, `kitchen_id` TEXT, `sort` INTEGER);

-- ----------------------------
-- Table structure for tb_order
-- ----------------------------
DROP TABLE IF EXISTS "tb_order";
CREATE TABLE `tb_order` (`id` TEXT PRIMARY KEY, `table_number` TEXT, `customer_count` INTEGER DEFAULT 0, `accounting_time` TEXT, `order_state` INTEGER DEFAULT 1, `production_status` INTEGER DEFAULT 0, `original_amount` INTEGER DEFAULT 0, `order_money` INTEGER DEFAULT 0, `origin_money` INTEGER, `article_count` INTEGER DEFAULT 0, `serial_number` TEXT DEFAULT '', `allow_cancel` INTEGER DEFAULT 1, `closed` INTEGER DEFAULT 0, `create_time` TEXT, `push_order_time` TEXT, `print_order_time` TEXT, `remark` TEXT, `distribution_mode_id` INTEGER DEFAULT 0, `amount_with_children` INTEGER DEFAULT 0, `parent_order_id` TEXT, `service_price` INTEGER DEFAULT 0, `is_pos_pay` INTEGER DEFAULT 0, `pay_type` INTEGER DEFAULT 1, `count_with_child` INTEGER DEFAULT 0, `allow_continue_order` INTEGER DEFAULT 0, `payment_amount` INTEGER DEFAULT 0, `customer_id` TEXT DEFAULT 0, `customer_address_id` TEXT, `ver_code` TEXT, `pay_mode` INTEGER DEFAULT 0, `meal_fee_price` REAL DEFAULT 0, `meal_all_number` INTEGER DEFAULT 0, `order_mode` INTEGER DEFAULT 0, `allow_appraise` INTEGER DEFAULT 0, `confirm_time` TEXT, `order_number` INTEGER DEFAULT 0, `call_number_time` TEXT, `call_times` INTEGER DEFAULT 0, `shop_detail_id` TEXT, `data_origin` TEXT DEFAULT 0, `sync_state` INTEGER DEFAULT 0, `last_sync_time` TEXT, `order_pos_discount_money` TEXT DEFAULT 0, `member_discount_money` TEXT DEFAULT 0, `erase_money` TEXT DEFAULT 0, `reduce_money` TEXT DEFAULT 0, `real_erase_money` TEXT DEFAULT 0, `pos_discount` TEXT DEFAULT 100, `no_discount_money` TEXT DEFAULT 0, `exemption_money` TEXT DEFAULT 0, `need_confirm_order_item` INTEGER DEFAULT 0, `sauce_fee_count` TEXT, `sauce_fee_price` INTEGER, `towel_fee_count` TEXT, `towel_fee_price` INTEGER, `tableware_fee_count` TEXT, `tableware_fee_price` INTEGER, `is_use_new_service` INTEGER, `grant_money` INTEGER);

-- ----------------------------
-- Table structure for tb_order_item
-- ----------------------------
DROP TABLE IF EXISTS "tb_order_item";
CREATE TABLE `tb_order_item` (`id` TEXT PRIMARY KEY, `order_id` TEXT, `article_id` TEXT, `article_name` TEXT, `count` INTEGER, `original_price` INTEGER, `no_discount_price` INTEGER, `unit_price` INTEGER, `final_price` INTEGER, `remark` TEXT, `sort` INTEGER, `status` INTEGER, `type` INTEGER, `parent_id` TEXT, `create_time` TEXT, `meal_item_id` TEXT, `kitchen_id` TEXT, `recommend_id` TEXT, `orgin_count` INTEGER, `refund_count` INTEGER, `grant_count` INTEGER DEFAULT 0, `meal_fee_number` INTEGER, `change_count` INTEGER, `print_fail_flag` INTEGER, `pos_discount` INTEGER DEFAULT 100, `weight` FLOAT DEFAULT 0, `need_remind` INTEGER DEFAULT 0);

-- ----------------------------
-- Table structure for tb_order_payment_item
-- ----------------------------
DROP TABLE IF EXISTS "tb_order_payment_item";
CREATE TABLE `tb_order_payment_item` (`id` TEXT PRIMARY KEY, `order_id` TEXT, `payment_mode_id` INTEGER, `pay_value` REAL, `pay_time` TEXT, `remark` TEXT, `result_data` TEXT, `is_use_bonus` INTEGER, `to_pay_id` TEXT, `refund_source_id` TEXT, `type` TEXT);

-- ----------------------------
-- Table structure for tb_order_refund_remark
-- ----------------------------
DROP TABLE IF EXISTS "tb_order_refund_remark";
CREATE TABLE `tb_order_refund_remark` (`id` INTEGER PRIMARY KEY, `type` INTEGER, `article_id` TEXT, `order_id` TEXT, `refund_remark_id` TEXT, `refund_remark` TEXT, `remark_supply` TEXT, `refund_count` INTEGER, `create_time` TEXT, `shop_id` TEXT, `brand_id` TEXT, `data_sync_id` TEXT);

-- ----------------------------
-- Table structure for tb_order_remark
-- ----------------------------
DROP TABLE IF EXISTS "tb_order_remark";
CREATE TABLE `tb_order_remark` (`id` TEXT PRIMARY KEY, `remark_name` TEXT, `sort` INTEGER, `state` INTEGER, `create_time` TEXT, `bo_order_remark_id` TEXT);

-- ----------------------------
-- Table structure for tb_payment_review
-- ----------------------------
DROP TABLE IF EXISTS "tb_payment_review";
CREATE TABLE `tb_payment_review` (`id` TEXT PRIMARY KEY, `daily_log_id` TEXT, `payment_mode_id` INTEGER, `report_money` REAL, `audit_money` REAL, `create_time` TEXT, `operator` TEXT);

-- ----------------------------
-- Table structure for tb_perm
-- ----------------------------
DROP TABLE IF EXISTS "tb_perm";
CREATE TABLE `tb_perm` (`id` TEXT PRIMARY KEY, `pval` TEXT, `parent` TEXT, `pname` TEXT, `ptype` INTEGER, `leaf` INTEGER, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);

-- ----------------------------
-- Table structure for tb_platform_order
-- ----------------------------
DROP TABLE IF EXISTS "tb_platform_order";
CREATE TABLE `tb_platform_order` (`id` TEXT PRIMARY KEY, `type` INTEGER, `platform_order_id` TEXT, `shop_detail_id` TEXT, `original_price` REAL, `total_price` REAL, `address` TEXT, `phone` TEXT, `name` TEXT, `order_create_time` INTEGER, `pay_type` TEXT, `remark` TEXT, `order_number` INTEGER);

-- ----------------------------
-- Table structure for tb_platform_order_detail
-- ----------------------------
DROP TABLE IF EXISTS "tb_platform_order_detail";
CREATE TABLE `tb_platform_order_detail` (`id` TEXT PRIMARY KEY, `platform_order_id` TEXT, `name` TEXT, `price` REAL, `quantity` INTEGER, `show_name` TEXT);

-- ----------------------------
-- Table structure for tb_platform_order_extra
-- ----------------------------
DROP TABLE IF EXISTS "tb_platform_order_extra";
CREATE TABLE `tb_platform_order_extra` (`id` TEXT PRIMARY KEY, `platform_order_id` TEXT, `name` TEXT, `price` REAL, `quantity` INTEGER);

-- ----------------------------
-- Table structure for tb_print_record
-- ----------------------------
DROP TABLE IF EXISTS "tb_print_record";
CREATE TABLE `tb_print_record` (`id` TEXT PRIMARY KEY, `serial_number` TEXT, `order_time` TEXT, `distribution_mode` TEXT, `table_number` TEXT, `ip` TEXT, `port` TEXT, `print_type` TEXT, `print_template` TEXT, `print_content` TEXT, `status` INTEGER, `remark` TEXT);

-- ----------------------------
-- Table structure for tb_printer
-- ----------------------------
DROP TABLE IF EXISTS "tb_printer";
CREATE TABLE `tb_printer` (`id` TEXT PRIMARY KEY, `name` TEXT, `ip` TEXT, `port` TEXT, `print_type` TEXT, `ticket_type` TEXT, `range` TEXT, `receive_money` TEXT, `shop_detail_id` TEXT, `bill_of_account` INTEGER DEFAULT 0, `bill_of_consumption` INTEGER DEFAULT 0, `support_tangshi` INTEGER DEFAULT 1, `support_waidai` INTEGER DEFAULT 1, `support_waimai` INTEGER DEFAULT 1, `state` INTEGER DEFAULT 1, `spare_ip` TEXT);

-- ----------------------------
-- Table structure for tb_recommend
-- ----------------------------
DROP TABLE IF EXISTS "tb_recommend";
CREATE TABLE `tb_recommend` (`id` TEXT PRIMARY KEY, `name` TEXT, `count` INTEGER, `is_used` INTEGER, `sort` INTEGER, `create_time` TEXT, `print_type` INTEGER, `kitchen_id` TEXT, `choice_type` INTEGER);

-- ----------------------------
-- Table structure for tb_recommend_article
-- ----------------------------
DROP TABLE IF EXISTS "tb_recommend_article";
CREATE TABLE `tb_recommend_article` (`id` TEXT PRIMARY KEY, `recommend_id` TEXT, `article_id` INTEGER, `max_count` INTEGER, `price` REAL, `article_name` TEXT, `create_time` TEXT, `sort` INTEGER, `kitchen_id` TEXT);

-- ----------------------------
-- Table structure for tb_refund_remark
-- ----------------------------
DROP TABLE IF EXISTS "tb_refund_remark";
CREATE TABLE `tb_refund_remark` (`id` TEXT PRIMARY KEY, `type` TEXT, `name` TEXT, `create_time` TEXT, `sort` INTEGER, `state` INTEGER);

-- ----------------------------
-- Table structure for tb_role
-- ----------------------------
DROP TABLE IF EXISTS "tb_role";
CREATE TABLE `tb_role` (`id` TEXT PRIMARY KEY, `rname` TEXT UNIQUE, `rdesc` TEXT, `rval` TEXT, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);

-- ----------------------------
-- Table structure for tb_role_perm
-- ----------------------------
DROP TABLE IF EXISTS "tb_role_perm";
CREATE TABLE `tb_role_perm` (`id` TEXT PRIMARY KEY, `role_id` TEXT, `perm_val` TEXT, `perm_type` INTEGER, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);

-- ----------------------------
-- Table structure for tb_shop_detail
-- ----------------------------
DROP TABLE IF EXISTS "tb_shop_detail";
CREATE TABLE `tb_shop_detail` (`id` TEXT PRIMARY KEY, `name` TEXT, `address` TEXT, `phone` TEXT, `remark` TEXT, `is_meal_fee` INTEGER, `meal_fee_name` TEXT, `meal_fee_price` INTEGER, `print_type` INTEGER, `is_use_service_price` INTEGER, `shop_mode` INTEGER, `pay_type` INTEGER, `pos_plus_type` INTEGER, `brand_id` TEXT, `brand_name` TEXT, `brand_logo` TEXT, `close_continue_time` INTEGER, `auto_confirm_time` INTEGER, `auto_print_total` INTEGER, `allow_first_pay` INTEGER, `allow_after_pay` INTEGER, `print_receipt` INTEGER, `print_kitchen` INTEGER, `modify_order_print_receipt` INTEGER, `modify_order_print_kitchen` INTEGER, `open_pos_wechat_pay` INTEGER, `open_pos_ali_pay` INTEGER, `open_pos_union_pay` INTEGER, `open_pos_money_pay` INTEGER, `open_pos_shanhui_pay` INTEGER, `open_pos_integral_pay` INTEGER, `open_pos_pay_order` INTEGER, `open_pos_charge` INTEGER, `open_pos_group_buy` INTEGER, `open_pos_cash_coupon_buy` INTEGER, `open_order_remark` INTEGER, `template_type` INTEGER, `print_meituan` INTEGER, `service_name` TEXT, `service_price` INTEGER, `split_kitchen` INTEGER, `is_turntable` INTEGER, `turntable_print_type` INTEGER, `tv_ip` TEXT, `open_bad_appraise_print_order` INTEGER, `bad_appraise_print_receipt` INTEGER, `bad_appraise_print_kitchen` INTEGER, `order_welcome_message` TEXT DEFAULT 0, `is_open_scm` INTEGER, `auto_print_consume_order` INTEGER DEFAULT 1, `auto_print_checkout_order` INTEGER DEFAULT 1, `log_url` TEXT DEFAULT 0, `enable_duo_dong_xian` INTEGER DEFAULT 1, `open_rpay` INTEGER, `print_out_details` INTEGER DEFAULT 1, `service_type` INTEGER, `tableware_fee_name` TEXT, `tableware_fee_price` INTEGER, `is_open_tableware_fee` INTEGER, `towel_fee_name` TEXT, `towel_fee_price` INTEGER, `is_open_towel_fee` INTEGER, `sauce_fee_name` TEXT, `sauce_fee_price` INTEGER, `is_open_sauce_fee` INTEGER, `is_open_add_print_total` INTEGER DEFAULT 1, `is_open_user_sign` INTEGER DEFAULT 0);

-- ----------------------------
-- Table structure for tb_shop_tv_config
-- ----------------------------
DROP TABLE IF EXISTS "tb_shop_tv_config";
CREATE TABLE `tb_shop_tv_config` (`id` INTEGER PRIMARY KEY, `shop_detail_id` TEXT, `brand_id` TEXT, `ready_back_color` TEXT, `take_meal_back_color` TEXT, `call_back_color` TEXT, `tv_background` TEXT, `number_color` TEXT, `call_number_color` TEXT, `text` TEXT, `label_color` TEXT);

-- ----------------------------
-- Table structure for tb_support_time
-- ----------------------------
DROP TABLE IF EXISTS "tb_support_time";
CREATE TABLE `tb_support_time` (`id` INTEGER PRIMARY KEY, `name` TEXT, `begin_time` TEXT, `end_time` TEXT, `support_week_bin` INTEGER, `remark` TEXT, `shop_detail_id` TEXT, `discount` INTEGER);

-- ----------------------------
-- Table structure for tb_sync_log
-- ----------------------------
DROP TABLE IF EXISTS "tb_sync_log";
CREATE TABLE `tb_sync_log` (`id` TEXT PRIMARY KEY, `name` TEXT, `log` TEXT, `sync_time` TEXT, `state` INTEGER, `remark` INTEGER);

-- ----------------------------
-- Table structure for tb_table_qrcode
-- ----------------------------
DROP TABLE IF EXISTS "tb_table_qrcode";
CREATE TABLE `tb_table_qrcode` (`id` TEXT PRIMARY KEY, `table_number` INTEGER, `customer_count` INTEGER, `table_state` INTEGER DEFAULT 0, `area_id` TEXT, `table_pass` TEXT, `shop_detail_id` TEXT);

-- ----------------------------
-- Table structure for tb_unit
-- ----------------------------
DROP TABLE IF EXISTS "tb_unit";
CREATE TABLE `tb_unit` (`id` TEXT PRIMARY KEY, `name` TEXT, `shop_detail_id` TEXT, `sort` INTEGER);

-- ----------------------------
-- Table structure for tb_unit_detail
-- ----------------------------
DROP TABLE IF EXISTS "tb_unit_detail";
CREATE TABLE `tb_unit_detail` (`id` TEXT PRIMARY KEY, `name` TEXT, `is_used` INTEGER, `unit_id` TEXT, `sort` INTEGER);

-- ----------------------------
-- Table structure for tb_user
-- ----------------------------
DROP TABLE IF EXISTS "tb_user";
CREATE TABLE `tb_user` (`id` TEXT PRIMARY KEY, `name` TEXT, `pwd` TEXT, `shop_detail_id` TEXT, `brand_id` TEXT, `super_pwd` TEXT, `state` INTEGER, `token` TEXT);

-- ----------------------------
-- Table structure for tb_user_role
-- ----------------------------
DROP TABLE IF EXISTS "tb_user_role";
CREATE TABLE `tb_user_role` (`id` TEXT PRIMARY KEY, `user_id` TEXT, `role_id` TEXT, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);

-- ----------------------------
-- Table structure for tb_virtual_products
-- ----------------------------
DROP TABLE IF EXISTS "tb_virtual_products";
CREATE TABLE `tb_virtual_products` (`id` TEXT PRIMARY KEY, `name` TEXT, `is_used` INTEGER, `create_time` TEXT, `shop_detail_id` TEXT);

-- ----------------------------
-- Table structure for tb_virtual_products_kitchen
-- ----------------------------
DROP TABLE IF EXISTS "tb_virtual_products_kitchen";
CREATE TABLE `tb_virtual_products_kitchen` (`id` TEXT PRIMARY KEY, `virtual_id` TEXT, `kitchen_id` TEXT);

-- ----------------------------
-- Table structure for tb_weight_package
-- ----------------------------
DROP TABLE IF EXISTS "tb_weight_package";
CREATE TABLE `tb_weight_package` (`id` TEXT PRIMARY KEY, `name` TEXT, `create_time` TEXT, `shop_id` TEXT);

-- ----------------------------
-- Table structure for tb_weight_package_detail
-- ----------------------------
DROP TABLE IF EXISTS "tb_weight_package_detail";
CREATE TABLE `tb_weight_package_detail` (`id` TEXT PRIMARY KEY, `name` TEXT, `sort` INTEGER, `create_time` TEXT, `is_used` TINYINT(1), `weight` INTEGER, `weight_package_id` TEXT);

-- ----------------------------
-- Indexes structure for table tb_article
-- ----------------------------
CREATE UNIQUE INDEX "main"."article_id"
ON "tb_article" (
  "id" ASC
);

-- ----------------------------
-- Indexes structure for table tb_order
-- ----------------------------
CREATE UNIQUE INDEX "main"."id"
ON "tb_order" (
  "id" ASC
);
CREATE INDEX "main"."parent_order_id"
ON "tb_order" (
  "parent_order_id" ASC
);

-- ----------------------------
-- Indexes structure for table tb_order_item
-- ----------------------------
CREATE UNIQUE INDEX "main"."item_id"
ON "tb_order_item" (
  "id" ASC
);
CREATE INDEX "main"."order_id"
ON "tb_order_item" (
  "order_id" ASC
);

PRAGMA foreign_keys = true;
