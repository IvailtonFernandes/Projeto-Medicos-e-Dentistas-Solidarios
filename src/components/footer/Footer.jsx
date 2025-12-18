import s from './footer.module.scss';
import Logo  from '../../assets/logo.png'
import email  from '../../assets/email.png'
import telefone  from '../../assets/telefone.png'
import localizacao  from '../../assets/localizacao.png' 

const Footer = () => {
  return (
   <footer className={s.footer}>
<section className={s.sectionContato}>
    <div className={s.divMeD}>
    <article>
    <img src={Logo} alt="imagem da logo" />
    <h3>Médicos & Dentistas</h3>
    </article>
<p>Saúde e cuidado sem barreiras para toda comunidade.</p>
    </div>
    <div className={s.divContato}>
        <h3>Contato</h3>
<article>
    <img src={email} alt="imagem do email" />
    <p>contato@medico-dentista.org</p>
    </article>
<article>
    <img src={telefone} alt="imagem do telefone" />
    <p>(11) 3000-0000</p>
    </article>
<article>
    <img src={localizacao} alt="imagem da localização" />
    <p>São Paulo, Brasil</p>
    </article>
    </div>
    <div  className={s.divRedes}>
<h3>Redes Sociais</h3>
<p>Facebook</p>
<p>Instagram</p>
<p>LinkedIn</p>
    </div>
</section>
<section className={s.sectionDireitos}>
    <div>
        <p>© 2025 Médicos e Dentistas pela Comunidade. Todos os direitos reservados.</p>
    </div>
    
</section>

   </footer>
  )
}

export default Footer
