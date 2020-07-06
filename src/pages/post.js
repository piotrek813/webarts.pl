import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Nav from 'components/Nav';
import Hero from 'components/Hero';
import Footer from 'components/Footer';

const post = ({ data }) => (
  <>
    <Nav />
    <main>
      <article className="post-article">
        <header>
          <Hero
            className="post-article__hero"
            image={data.allDatoCmsPost.edges[0].node.hero}
          />
          <h1 className="post-article__heading">Very intersting heading</h1>
        </header>
        <section className="post-article__meta">
          <span className="post-article__meta-data">Piotr Smoliński</span>
          <span className="post-article__meta-data">2020-03-20</span>
        </section>
        <section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
            repellat nesciunt ipsum quidem velit harum ea expedita voluptatem
            facilis repellendus ullam distinctio quod, quas in error animi
            vitae? Temporibus ipsum sed iste corporis itaque minima reiciendis
            et maxime, porro ducimus unde animi repellendus repellat
            perspiciatis ullam. Fuga necessitatibus, quo corporis est placeat,
            delectus consectetur aut fugit molestiae amet sapiente soluta dolor
            excepturi facilis eaque repudiandae natus dolore tenetur. Molestias,
            quae ducimus expedita a ipsa delectus dolores quos tenetur soluta
            rem sint placeat quod voluptatem vitae modi omnis ex, iste mollitia
            maxime laborum asperiores, autem unde esse amet. Consectetur,
            blanditiis aliquid.
          </p>
          <p>
            Rerum hic fuga dolore tempore adipisci sed dicta inventore
            reiciendis labore cumque quibusdam voluptate tenetur animi possimus
            qui aspernatur, temporibus ducimus provident dolor officiis, magnam
            maxime doloremque? In, vero reprehenderit consequuntur recusandae
            sequi est odio dicta iusto non inventore alias nisi perspiciatis
            voluptatum, at aut? Modi voluptates saepe consequuntur magnam,
            consequatur dolores ullam facilis maiores ipsa distinctio ea
            molestiae optio voluptas, est similique, quae eum cum tempora
            impedit minima possimus delectus earum. At, possimus corrupti quasi
            voluptatum repudiandae officiis natus necessitatibus reiciendis
            consequuntur ex inventore corporis cumque quas. Ut laborum magni
            rerum hic asperiores, ipsa adipisci aperiam. Rerum, odio libero!
          </p>
          <p>
            Autem, recusandae expedita. Explicabo nemo cumque saepe
            necessitatibus, soluta dolores! Repellendus, optio exercitationem
            velit porro quidem excepturi atque nemo ipsum iusto. Quia
            praesentium cumque eum maiores, ex natus assumenda nemo facilis
            reiciendis suscipit. Repellendus quas quo sapiente laudantium
            temporibus accusamus. Neque veniam ex odit sapiente, et voluptates
            optio aspernatur quis aliquid laborum natus itaque ad? Quas magni
            nemo dolorem rem sapiente. Repellendus at, minus dignissimos officia
            et ab ad ratione id non ipsam iusto sit unde magnam. Dolorum
            deleniti modi natus assumenda minus molestiae inventore quaerat
            tempora. Ex, praesentium consectetur. Illum, ipsam praesentium
            perspiciatis ipsum eveniet deleniti voluptatibus provident
            doloremque.
          </p>
          <p>
            Doloremque dolores nihil possimus quis aperiam obcaecati non aut ea
            voluptatum officia vitae nam quas debitis delectus rem accusantium
            blanditiis, suscipit tempore dignissimos eum, saepe, eveniet
            sapiente. Numquam omnis assumenda nobis necessitatibus voluptate
            veritatis provident quaerat, veniam excepturi repellat. Consectetur
            cumque nihil repellendus in culpa veritatis quam deserunt laboriosam
            nostrum voluptatum labore temporibus rerum, quaerat, odit
            aspernatur! Nulla officia, cupiditate animi eveniet ipsam
            perferendis excepturi minima amet adipisci provident earum possimus
            iste expedita facilis assumenda ratione consequatur veritatis vero
            sed. Sed eum aliquam dolorum veniam laboriosam inventore saepe, nisi
            vitae tempora facere voluptatem, voluptas harum eveniet cupiditate
            ea, magnam doloribus.
          </p>
          <p>
            Ut rem debitis doloribus dolorum aspernatur libero! Sit facere
            tempore numquam nam officiis ipsa, reprehenderit rem maiores, quia
            ullam fuga, tenetur laboriosam eum nisi exercitationem dolore hic
            nobis modi cum aspernatur et itaque. Beatae soluta exercitationem
            iste quae rerum iusto dolorum aliquid tempora reiciendis eveniet?
            Iure perferendis non sed ea. Earum fuga assumenda natus
            necessitatibus, nobis ullam, dolor non perspiciatis officia minima
            nam eligendi eius. Dolor vel consectetur rem itaque suscipit vitae!
            Eligendi hic eius repellat error nesciunt iusto nulla facere
            voluptas exercitationem ab. Autem incidunt itaque facere recusandae
            accusantium magnam enim ratione reprehenderit. Dolorum eveniet
            tempora nisi explicabo voluptatibus.
          </p>
          <p>
            Eveniet rerum, esse sed sequi impedit repellendus deleniti voluptas
            quisquam? Eveniet fuga illum eos illo itaque, facere quis voluptates
            laborum iste voluptatum rem saepe non magni! Consectetur nihil
            architecto, unde, magni aspernatur possimus, modi repudiandae autem
            officia deleniti omnis dicta est rerum nesciunt. Illum minima
            consequatur iusto dignissimos culpa, facere ullam est adipisci alias
            ab explicabo cupiditate deserunt. Consectetur velit iste autem amet!
            Placeat culpa tempora, aut iusto, harum praesentium consequatur
            facere quis modi odit sequi commodi pariatur amet incidunt animi
            vitae voluptates non perspiciatis nobis a voluptas blanditiis! Unde
            harum odit sit fugiat, quas qui quis totam a odio.
          </p>
        </section>
      </article>
    </main>
    <Footer />
  </>
);

post.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export const query = graphql`
  {
    allDatoCmsPost(filter: { heading: { eq: "Headless Cms vs Standard" } }) {
      edges {
        node {
          hero {
            fluid(maxWidth: 1600) {
              ...GatsbyDatoCmsFluid_noBase64
            }
          }
        }
      }
    }
  }
`;

export default post;
