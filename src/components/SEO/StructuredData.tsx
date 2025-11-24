import { Helmet } from 'react-helmet-async';
import { structuredData } from '../../config/seo';

export default function StructuredData() {
  return (
    <Helmet>
      {/* Person Schema */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData.person)}
      </script>
      
      {/* Website Schema */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData.website)}
      </script>
      
      {/* Portfolio Schema */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData.portfolio)}
      </script>
    </Helmet>
  );
}
