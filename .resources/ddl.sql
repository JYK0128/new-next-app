DROP SCHEMA IF EXISTS public CASCADE;
CREATE SCHEMA IF NOT EXISTS public;

-- 유저
CREATE TABLE IF NOT EXISTS users (
  id                  UUID          NOT NULL,
  email               VARCHAR(255)  NOT NULL,
  nickname            VARCHAR(255)  NOT NULL,
  blocked_until       TIMESTAMP,
  last_login_at       TIMESTAMP,
  last_logout_at      TIMESTAMP,
  created_at          TIMESTAMP     NOT NULL,
  updated_at          TIMESTAMP     NOT NULL,
  deleted_at          TIMESTAMP,
  metadata            jsonb,

  PRIMARY KEY(id)
);

-- 게시판
CREATE TABLE IF NOT EXISTS posts (
  id                  BIGINT        NOT NULL,
  title               VARCHAR(255)  NOT NULL,
  slug                VARCHAR(255)  NOT NULL UNIQUE,
  content             TEXT          NOT NULL,
  thumbnail           TEXT,
  views               BIGINT        NOT NULL DEFAULT 0,
  likes               BIGINT        NOT NULL DEFAULT 0,
  created_at          TIMESTAMP     NOT NULL,
  updated_at          TIMESTAMP     NOT NULL,
  deleted_at          TIMESTAMP,
  metadata            jsonb,
  author_id           UUID          NOT NULL,

  PRIMARY KEY(id),
  FOREIGN KEY(author_id) REFERENCES users(id)
);

-- 커멘트
CREATE TABLE IF NOT EXISTS comments (
  id                  BIGINT        NOT NULL,
  post_id             BIGINT        NOT NULL,
  author_id           UUID,                
  nickname            VARCHAR(255)  NOT NULL,
  content             TEXT          NOT NULL,
  created_at          TIMESTAMP     NOT NULL,
  updated_at          TIMESTAMP     NOT NULL,
  deleted_at          TIMESTAMP,
  metadata            jsonb,

  PRIMARY KEY(id),
  FOREIGN KEY(post_id) REFERENCES posts(id),
  FOREIGN KEY(author_id) REFERENCES users(id)
);

--파일
CREATE TABLE IF NOT EXISTS files (
  id                  UUID          NOT NULL,
  post_id             BIGINT        NOT NULL,
  uploader_id         UUID          NOT NULL,
  file_type           VARCHAR(50),
  file_size           BIGINT,
  created_at          TIMESTAMP     NOT NULL,
  updated_at          TIMESTAMP     NOT NULL,
  deleted_at          TIMESTAMP

  PRIMARY KEY(id),
  FOREIGN KEY(post_id) REFERENCES posts(id),
  FOREIGN KEY(uploader_id) REFERENCES users(id)    
);