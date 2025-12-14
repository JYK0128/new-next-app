DROP SCHEMA IF EXISTS public CASCADE;
CREATE SCHEMA IF NOT EXISTS public;

-- 유저
CREATE TABLE IF NOT EXISTS app_user (
  id                   TEXT          NOT NULL,
  name                 TEXT          NOT NULL,
  email                TEXT          NOT NULL,
  email_verified       BOOLEAN       NOT NULL      DEFAULT false,
  image                TEXT,
  created_at           TIMESTAMP     NOT NULL      DEFAULT CURRENT_TIMESTAMP,
  updated_at           TIMESTAMP     NOT NULL,
  metadata             jsonb,

  PRIMARY KEY(id)
);
CREATE INDEX IF NOT EXISTS idx_app_user_metadata_gin ON app_user USING GIN (metadata);
CREATE INDEX IF NOT EXISTS idx_user_metadata_gin ON app_user USING GIN (metadata);

-- 세션
CREATE TABLE IF NOT EXISTS session (
  id                   TEXT          NOT NULL,
  user_id              TEXT          NOT NULL,
  token                TEXT          NOT NULL,
  expires_at           TIMESTAMP     NOT NULL,
  ip_address           TEXT,
  user_agent           TEXT,
  created_at           TIMESTAMP     NOT NULL        DEFAULT CURRENT_TIMESTAMP,
  updated_at           TIMESTAMP     NOT NULL,
  metadata            jsonb,

  PRIMARY KEY(id),
  UNIQUE(token),
  FOREIGN KEY(user_id) REFERENCES app_user(id)
);
CREATE INDEX IF NOT EXISTS idx_session_metadata_gin ON session USING GIN (metadata);

-- 계정
CREATE TABLE IF NOT EXISTS account (
  id                       TEXT        NOT NULL,
  user_id                  TEXT        NOT NULL,
  account_id               TEXT        NOT NULL,
  provider_id              TEXT        NOT NULL,
  access_token             TEXT,
  refresh_token            TEXT,
  access_token_expires_at  TIMESTAMP,
  refresh_token_expires_at TIMESTAMP,
  scope                    TEXT,
  id_token                 TEXT,
  password                 TEXT,
  created_at               TIMESTAMP    NOT NULL     DEFAULT CURRENT_TIMESTAMP,
  updated_at               TIMESTAMP    NOT NULL,
  metadata                jsonb,

  PRIMARY KEY(id),
  FOREIGN KEY(user_id) REFERENCES app_user(id)
);
CREATE INDEX IF NOT EXISTS idx_account_metadata_gin ON account USING GIN (metadata);

-- 검증
CREATE TABLE IF NOT EXISTS verification (
  id                      TEXT          NOT NULL,
  identifier              TEXT          NOT NULL,
  value                   TEXT          NOT NULL,
  expires_at              TIMESTAMP     NOT NULL,
  created_at              TIMESTAMP     NOT NULL     DEFAULT CURRENT_TIMESTAMP,
  updated_at              TIMESTAMP     NOT NULL,
  metadata                jsonb,
  
  PRIMARY KEY(id)
);
CREATE INDEX IF NOT EXISTS idx_verification_metadata_gin ON verification USING GIN (metadata);

-- 게시판
CREATE TABLE IF NOT EXISTS blog_post (
  id                  TEXT          NOT NULL,
  title               VARCHAR(255)  NOT NULL,
  content             TEXT          NOT NULL,
  thumbnail           TEXT,
  created_at          TIMESTAMP     NOT NULL,
  created_by          TEXT          NOT NULL,
  updated_at          TIMESTAMP     NOT NULL,
  updated_by          TEXT          NOT NULL,
  deleted_at          TIMESTAMP,
  deleted_by          TEXT,
  metadata            jsonb,

  PRIMARY KEY(id),
  FOREIGN KEY(created_by) REFERENCES app_user(id),
  FOREIGN KEY(updated_by) REFERENCES app_user(id)
);
CREATE INDEX IF NOT EXISTS idx_blog_post_metadata_gin ON blog_post USING GIN (metadata);


-- 커멘트
CREATE TABLE IF NOT EXISTS blog_comment (
  id                  TEXT          NOT NULL,
  post_id             TEXT          NOT NULL,
  content             TEXT          NOT NULL,
  created_at          TIMESTAMP     NOT NULL,
  created_by          TEXT          NOT NULL,
  updated_at          TIMESTAMP     NOT NULL,
  updated_by          TEXT          NOT NULL,
  deleted_at          TIMESTAMP,
  deleted_by          TEXT,
  metadata            jsonb,

  PRIMARY KEY(id),
  FOREIGN KEY(post_id) REFERENCES blog_post(id)
);
CREATE INDEX IF NOT EXISTS idx_blog_comment_metadata_gin ON blog_comment USING GIN (metadata);


--파일
CREATE TABLE IF NOT EXISTS file_upload (
  id                  TEXT          NOT NULL,
  url                 TEXT          NOT NULL,
  name                VARCHAR(255)  NOT NULL,
  type                VARCHAR(50)   NOT NULL,
  size                INTEGER       NOT NULL,
  created_at          TIMESTAMP     NOT NULL,
  created_by          TEXT          NOT NULL,
  updated_at          TIMESTAMP     NOT NULL,
  updated_by          TEXT          NOT NULL,
  deleted_at          TIMESTAMP,
  deleted_by          TEXT,
  metadata            jsonb,

  PRIMARY KEY(id),
  FOREIGN KEY(created_by) REFERENCES app_user(id),
  FOREIGN KEY(updated_by) REFERENCES app_user(id)
);
CREATE INDEX IF NOT EXISTS idx_file_upload_metadata_gin ON file_upload USING GIN (metadata);