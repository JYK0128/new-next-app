DROP SCHEMA IF EXISTS public CASCADE;
CREATE SCHEMA IF NOT EXISTS public;

-- 유저
CREATE TABLE IF NOT EXISTS app_user (
  id                  UUID          NOT NULL,
  email               VARCHAR(255)  NOT NULL,
  nickname            VARCHAR(255)  NOT NULL,
  blocked_until       TIMESTAMP,
  last_login_at       TIMESTAMP,
  last_logout_at      TIMESTAMP,
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
  id                  BIGINT        NOT NULL,
  title               VARCHAR(255)  NOT NULL,
  slug                VARCHAR(255)  NOT NULL UNIQUE,
  content             TEXT          NOT NULL,
  thumbnail           TEXT,
  views               BIGINT        NOT NULL DEFAULT 0,
  likes               BIGINT        NOT NULL DEFAULT 0,
  created_at          TIMESTAMP     NOT NULL,
  created_by          UUID          NOT NULL,
  updated_at          TIMESTAMP     NOT NULL,
  updated_by          UUID          NOT NULL,
  deleted_at          TIMESTAMP,
  deleted_by          UUID,
  metadata            jsonb,
  author_id           UUID          NOT NULL,

  PRIMARY KEY(id),
  FOREIGN KEY(author_id) REFERENCES app_user(id)
);

-- 커멘트
CREATE TABLE IF NOT EXISTS blog_comment (
  id                  BIGINT        NOT NULL,
  post_id             BIGINT        NOT NULL,
  author_id           UUID,                
  nickname            VARCHAR(255)  NOT NULL,
  content             TEXT          NOT NULL,
  created_at          TIMESTAMP     NOT NULL,
  created_by          UUID          NOT NULL,
  updated_at          TIMESTAMP     NOT NULL,
  updated_by          UUID          NOT NULL,
  deleted_at          TIMESTAMP,
  deleted_by          UUID,
  metadata            jsonb,

  PRIMARY KEY(id),
  FOREIGN KEY(post_id) REFERENCES blog_post(id),
  FOREIGN KEY(author_id) REFERENCES app_user(id)
);

--파일
CREATE TABLE IF NOT EXISTS file_upload (
  id                  UUID          NOT NULL,
  file_name           VARCHAR(255)  NOT NULL,
  file_type           VARCHAR(50)   NOT NULL,
  file_size           BIGINT        NOT NULL,
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