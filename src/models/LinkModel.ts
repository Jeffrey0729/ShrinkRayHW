import { createHash } from 'crypto';
import { Link } from '../entities/Link';
import { AppDataSource } from '../dataSource';

const linkRepository = AppDataSource.getRepository(Link);

async function getLinkById(linkId: string): Promise<Link | null> {
  const link = await linkRepository.findOne({ where: { linkId } });
  return link;
}

function createLinkId(originalUrl: string, userId: string): string {
  const md5 = createHash('md5');
  md5.update(originalUrl + userId);
  const urlHash = md5.digest('base64url');
  const linkId = urlHash.slice(0, 8);

  return linkId;
}

export { getLinkById, createLinkId };
