import { MentionItemDataType } from '@norlandsoft/tide-extension-mention';

export type MentionMemberAttributes = {
  name: string;
  username: string;
  avatar_url: string;
  url: string;
};

export type MentionMemberItemDataType =
  MentionItemDataType<MentionMemberAttributes>;
