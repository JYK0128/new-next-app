DROP SCHEMA IF EXISTS public CASCADE;
CREATE SCHEMA IF NOT EXISTS public;

-- 유저
CREATE TABLE IF NOT EXISTS app_user (
  id                  UUID          NOT NULL,
  sub                 UUID          NOT NULL,
  created_at          TIMESTAMP     NOT NULL,
  created_by          UUID          NOT NULL,
  updated_at          TIMESTAMP     NOT NULL,
  updated_by          UUID          NOT NULL,
  deleted_at          TIMESTAMP,
  deleted_by          UUID,
  metadata            jsonb,

  PRIMARY KEY(id)
);

-- 게시판
CREATE TABLE IF NOT EXISTS blog_post (
  id                  UUID          NOT NULL,
  title               VARCHAR(255)  NOT NULL,
  content             TEXT          NOT NULL,
  thumbnail           TEXT,
  created_at          TIMESTAMP     NOT NULL,
  created_by          UUID          NOT NULL,
  updated_at          TIMESTAMP     NOT NULL,
  updated_by          UUID          NOT NULL,
  deleted_at          TIMESTAMP,
  deleted_by          UUID,
  metadata            jsonb,

  PRIMARY KEY(id),
  FOREIGN KEY(created_by) REFERENCES app_user(id),
  FOREIGN KEY(updated_by) REFERENCES app_user(id)
);

-- 커멘트
CREATE TABLE IF NOT EXISTS blog_comment (
  id                  UUID          NOT NULL,
  post_id             UUID          NOT NULL,
  content             TEXT          NOT NULL,
  created_at          TIMESTAMP     NOT NULL,
  created_by          UUID          NOT NULL,
  updated_at          TIMESTAMP     NOT NULL,
  updated_by          UUID          NOT NULL,
  deleted_at          TIMESTAMP,
  deleted_by          UUID,
  metadata            jsonb,

  PRIMARY KEY(id),
  FOREIGN KEY(post_id) REFERENCES blog_post(id)
);

--파일
CREATE TABLE IF NOT EXISTS file_upload (
  id                  UUID          NOT NULL,
  url                 TEXT          NOT NULL,
  name                VARCHAR(255)  NOT NULL,
  type                VARCHAR(50)   NOT NULL,
  size                INTEGER       NOT NULL,
  created_at          TIMESTAMP     NOT NULL,
  created_by          UUID          NOT NULL,
  updated_at          TIMESTAMP     NOT NULL,
  updated_by          UUID          NOT NULL,
  deleted_at          TIMESTAMP,
  deleted_by          UUID,
  metadata            jsonb,


  PRIMARY KEY(id),
  FOREIGN KEY(created_by) REFERENCES app_user(id),
  FOREIGN KEY(updated_by) REFERENCES app_user(id)
);