import { Link } from '../entities/Link';
import { AppDataSource } from '../dataSource';

const linkRepository = AppDataSource.getRepository(Link);

async function getLinkById(linkId: string): Promise<Link | null> {
  const link = await linkRepository.findOne({ where: { linkId } });
  return link;
}

export { getLinkById };
