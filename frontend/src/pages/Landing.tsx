import Link from "../components/Link";
import { AdaptiveContentProps } from "../types/types";

const content: AdaptiveContentProps[] = [
  {
    title: " What is an SBT?",
    subtitle: "On-Chain Identity",
    content:
      "The Zilliqa Soul-Bound Token is intended to be a proof-of-concept utility token that allows users to own their on-chain identity. At its core, it is non-transferable token that users mint for themselves. This has been implemented on the Zilliqa blockchain using the native smart-contract language Scilla.",
    subcontent: "",
  },
  {
    title: "Purpose of SBT?",
    subtitle: "incentivizing utility to users",
    content:
      "The token’s purpose is to bring utility by incentivizing users to interact with the underlying platform to grow their SBT Profile. An example of user incentivization is earning educational achievements for completing a course or solving a problem. Rewards for participation could theoretically be in the form of NFTs, digital assets or just a simple “kudos” on the Profile Page. This system establishes a sense of reputation and trust in profiles which is essential for thriving online communities.",
    subcontent: "",
  },
  {
    title: "Our vision?",
    subtitle: "Constant innovation",
    content:
      "The concept of an SBT is rather loosely defined and quite novel. Thus, the vision of project reaches far beyond what has currently implemented. Nevertheless, this project serves as one of many starting points for powerful idea that will enable another layer of incentivization on top of decentralized digital ownership.",
    subcontent: "",
  },
];

export default function Landing() {
  return (
    <div className="text-white dark:text-white body-font ">
      <div className="hero container mx-auto 2xl:px-28 sm:px-8 py-32">
        <div className="flex justify-between items-center">
          <div className="hero-left">
            <h2 className="hero-subtitle">DEFI Social Utility</h2>
            <h1 className="hero-title">
              SBT On-Chain <br /> Non-transferable ID
            </h1>
            <p className="mb-4 mt-0 ">
              Gain social credit through secure and decentralized SBT's. Find
              out how. <a href="/educational">Learn More</a>
            </p>
            <Link className="cta-primary" to="create-profile">
              Mint Now
            </Link>
            <Link className="cta-secondary" to="profiles">
              View Profiles
            </Link>
          </div>
          <div className="hero-right">
            <div className="card">
              <a href={`/profiles/0x3227edf3d8ef577170f339689a128ce229dd8df2`}>
                <div className="card-image">
                  <img
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhMSERMVFhUVGRUbFhgWFSIYGBoaGRYWGBoaHxgeHSggGR4lHRMVIzIhKCkrLjEuFyAzRDMsOCgtMCsBCgoKDg0OGxAQGy0lICUwLSstLS0tKy0vLS0tLS0tLSswLS8tLS8tLS0tLS0rLy0tLS8uLS0vLS0tKy0tLS0tLf/AABEIAOAA4AMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQMEBQYHAgj/xABHEAACAQIDBAcFBQUFBgcAAAABAgADEQQSIQUxQVEGEyIyYXGBB0JSkaEUI3KxwTNigpLwNEPC0eEkg6Ky0vEVRFNjc6PD/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAQFAQIDBv/EADIRAAIBAwIDBgUEAgMAAAAAAAABAgMRIQQxEkFxBVFhgZHBIrHR4fAGEzKhQvEUUnL/2gAMAwEAAhEDEQA/AK3TDpTWxNZ1V2WirFUVTYMAbZmt3r2vY7vz1u8GRJ0YpKyK2UnJ3ZN4vIiZME3i8iIBN4vIiATeLyIgE3i8iIBN4vIiATeLyIgE3i8iIBN4vIiATeLyIgE3i8iIBN4vIiATebJ0P6U1sNWRWdmoswV1Y3Cgm2Zb92172G/8takiYlFNWZmMnF3QMiSZEyYEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEkSJIgAyJJkQBERAEREAREQBETyzAC5IA5nSAeonvDYepU/ZU2fxAsB6tbTymVTo3VtepUp07ak6uB590fWRZ62hDea8rv5JkmGjrz2g/Oy+bRh4mRq7Gc6UWNT97q8lP+Zn7XmoaeMVsevTXM4Qj9x82vkyqT6XPhNY6/TyxxW63XzRtLQaiOeG/Sz+RYxKQxCE2zC+619bjeLb76H5T2rg7iD5SZciWtueoiIAiIgCIiAIiIAiIgCSJEkQAZEkyIAiIgCIiAIiIBkdkbIavc5siKbE2uxNgbLfQbxqb+U2LC7Cw6G4phm+JyXPpfQeQAEs+iFW6VF5PceTKv6q0vauOJc0kPaLZQfhCoru+u/8AaKoHMjheeZ11arOtKDeE7W5WPTaGjShRjOKy1e/O5kALaDQSnWZNM+XS7DNwy7215X3+Mo4mulCmWO4brnefFj6knzMstk0TUvWqa5j2QR8JNmI4a3yrwGpuzEyClzJzebF19sZx9woYHdUfRPMe8/pYH4pYYzY9RiKjVOuZd9JgEpN4ADVTyzFhzHEV/tK0KrI7BaVQM6E7lbU1E9dXHm3gJgD0tqsz9UgsT2esDdlQNOyBa51JuRvA4XnWnSnP+C/Ov+vAxiT4W89bfPHrubPg3o16QCqMm4pbKUKndYd1gRw1BHAiWGKoUXJpYogOgulUkIzUzoDmPvDcw52NgGE0SvtPEM1R+vamX73VKKd9AL5rkjQDcZl+jfszxmMtXIREO6riHNV2FhYimNPR7SZS0Er3crdN18vua6jipJfupK/JtO6XguL+9ubyU8c1Gk5RK4qLa4Yst9+qm1gbaa8b+EtauLAsBa51GY5dOdjrx5S6TY1WkpNPHA/eVVyLhlT9m2QMdCoDG9hrYW43AzOJ6H16eHFdVV6FVRVNROw4VlDZqlO97WOuUkDwAvLmjNcChx3kr5atfe2b2u9uXLNr2rNJp+y9VXlBVXF4w42im/FSe+ecUn6PXcNjFbQMGPG2gv5HXjLmWbYNlJZQbjhzuRcX4A/nrLmlUDAEbj/XzneEm8Pc4dsdlT7PqqLzFrD8VuvL3PcRE3KgREQBERAEkSJIgAyJJkQBERAEREASnWqhQSd39aSpMZjqpLgKCbWAA4s3+hA/jM1nLhVyXodL/wAmsqd7LdvuS3fsvFl1g9v1KDlkK7wGBW677i73Fm1NvxHfMhsvpGgxTPUBU1ALg2sDbKba8bLa9r2tym2bF6JUMLSRq9RVrEdtyyqoJ3qubgPO53z3tno/TrUjqtWnrqLZl8QRf5j5WlFqOCpJya35/bYv3VpRSjRjZLbL9c3/AKx02WLOIGJxaLa9GlmKk7nqqEYi3HLnX1QjW5tXxmKajVtQtVNQn7gHt5idWU+6CTcg6XN9Lmc7xFavSdsGXKCmS6sne7QtcG2gYNrbxGs94HGvRcvSd1Y6Fs2ZiL3sSwIM0hoXJ3b+H5/S5KpUalWDlTtvu39m8eNr9xv3SfY1amFqbQW6Mt6SprRp1BUXSoxG8pqu7UEXNplOg22sStCrSw6qy9nqnY/c027QcCxu9rKci2F812UnXWOjmAxGPc9diK7UUIz3qWB4inkUABrWJbeARbUgjpmHoKiqiKFVQAqqLAAbgBwneTjS+GBSajQTjq3UqTu0rNLb86evI1Cp7P0qEtXxVV6jEs7BUUMxJJOUqbXJOgNpOH6H4nD/ANhx9SjrfKyBlPPS9hfXcvGbZi8XTpLnquiL8TsFHzMwG0uliqv3FN6naVc7A06YzOqX7VmcDNfsixAPaE0VWff8iVOrKUeGTbXdvbpc0zG7E2g1SuRkdhVC1DTZVXrKopvcKyqRm69CSDvYnnNi2LsjF4yjSqY3GVGosiMlGkRSQoVBQMqBQoAI01Og1BmewdAJhmeq2pbr6jWtfIyve3AZaagchblMV0D2pajRw1YFWCL1THQVAFBKjiCuoAOpUAi+ttv3pNYOFOnClJuMUm93bN+vf4rPjuVek+xcPTwxanSSmUKHMigN23VH13m4Y7+IB4TTdp7UbEVA1SmFqqiJWZdFqutwKtuBKdWDflbcBOgdMv7FXv8ACPq6ick2MKldiKaHKCePZ5C5PhbQ33bjeStLVUYvj5O9/L5deeSTLTx1FDguk+JZeyTXxO3PaO2bu3Nl81ZRoWAPmJUldug+JZSUNza4TthSeWcFVH8kwuy7qTTN7drQ7wRvH9cjzkmlqY1HZEDU9mRp0pVKVTj4d/hccN2vl+vcjJxESSVIiIgCSJEkQAZEkyIAiIgCIiAU69XKpbkPmeA+cqdDsNnxlLTNkLuwtqSgZ/n1mUy3xwujHkL/AMpB/SX/ALPagXaCg++rgeeUt+SD5yJq2+F9D0PY6jHS15r+WI9E/rm/Q6phcNl7TWNQ95uPkOSjgPzJJNnWpdZVPVdgoQKlZQM17XyAbnNjqWBAuLAm+XKCWGwv7PRPFkV28WcZ2PqzMfWVN+Zhmhe0XowlPJi6Za98j3YtowJHl2uVhqRymmYWjmI5A6zr/T6kGwFcE2sEI81qI1vpOUYk5FyDeb/nJmmfw2PQ9jJOnJy2i7+qwvNo6v0RVKWz6NT3TTNVyASe0DUOguTYGwHgBMHV6WV8SubC0q60vipUusqtrx7y0tx0sT4qZ49n3S+j1KYbEOKbUxZGY2RlvoM25SL2sd4A36gUdq9HqSVetwldFvfKKVXLWXiVp5AS43adkgDeRYDioriameeqqUZZ3/MmK2jt+lhmDV8PXSo17PXVs5F+DuC1r8BpKtPa1bFYerVpYZhSUftnayZibKFuoLtmA7Kg62HGZVcdtfu06uMYW0L0aar6tVplr+NpQqbD2liagfGB6gQnIK1VTTG8ZhTR8oax72XcbZZs4Uln3+5zvPbBsnSjFt/4dnyAmr1CsinMCKlSmroCQMwKswGmt5p9Xa1SpTRhgqtWnVsUalmqAkHSzU0OVwQNLhgRwl/tTo89Kk1Z8OhZbNelijTqMy9pSVXDBGOZVsDcXtPeF6N16r9eKaKKurNSrFGfmWQUgrEm5uCgNycvPlHg/wAja8uRQxm1MTWo1dn1FHXP1AUs4NSmalRSEqhRYsFSo+/NlQ3F9W27ZfRulRRVuxygAZSaajwCoRp+IsfGYDYmyeoxlMPQ6igit1F2D56zdnMzqbBshYKp+I21Jvu1aqFUsxsALn/tx8oqNLbqZV7WZi9lYEDMA1QNTcrfrGIZdGUMrEhjlZQWtfQm4nI61jjMSU7v2jEkeIzEfK5E6btrabYehl3YiuXYDimY6sfwKVUcyBwvbmWzKFszW0HZXyvqfUgfLxkrSU5OXF+Y3N6qdLSTqvCl8C8XhvySzfy3MhERLQ86IiIAkiRJEAGRJMiAIiIAiIgEMJiaVdqFdKqd6iQy/vAHu+TCwPrMvLXG4XPYrvH1HL+v1nKrDiRZdl6uNCq41P4TVpez8ve52LZO0aeIpLWpG6sPUHipHAg6ET1SQUla7AICSLm2UE3IvusCdPAgcJxfZe0cThmLUWZCe8ApZW8xqp89/jNjX2h4rLrSok88jD6Zv1lTLTyTwW8tNzpyjJd6lH6m19KTnwmJqN2USjW6sN2SWNNlzEHUb8qjf2jpqLclxRvUfzMu+km18Xjcq1dFzKcgXIg13gahjqBqxOvnLSsO03mZIo03BZLfsqDjCeU8x2d7P4sdco94XCCxfNlJm+dCDRSlWprUVcS9rEkKzIFTRSeGbP4gm/KaaP2beAlDay5iFNtFv2tRv/0nScOOFi11+hjU03DHDVn1ed/n1M1t7D7aFYmhh6gQd1r53OnvOzEg3vusORO+Zzo10m2n/wCco0jSpm1V6bqzoD7zorkgDUk23DdxFPo17NKOSnUxeZiQD1N7It9wI52Oo3XvN02LWo5Fp0afVqKdN+ry5cq1A2UWGl+wbyDKUVhK/wCdTw/C7vP56Ip9J3P2ZwuW7jKpbuqXBVG36jMV+d+E590pxOOqrTWk+Hw2FWwpjEMqVGAFld+sHZLDUKNwOut5vG2sHanhaI7nW00b8OR1A+ZX5TKbTpBqbZqYq6dw7yOIHja9hxOmk0TsZauaHsnGdVhalGri6VerUUIq0WzqjsSFe66IFzISRbu3Avv23bG2fs1PrMQKY+FEYu1Rt4CkquXWxvY2midJ9h/ZajrQFlqIWpWAABtZlAA4HIf94JiMW1TEP1lZ3e+7OdW9B2UX91QPTW8uGmdRKS2ZNr0aNChTryniSeP8m07WjjpeTeN+aR6q7Qq4l3rVDbrLXI+EXsig7lFzrxuTvN5VQACw0A3SYlnCChHhR53VaupqGnLZYiltFeHu93z5WRETYjCIiAJIkSRABkSTIgCIiAIiIAiIgCRaTEGLFtjjYL4sv0Of/BMfWGrS42tVsVHmfpb9TLOhqpP73/Mqt/zFpGqO8j3f6cjw6Jr/ALSb/pL2ZfUj3hzWbD0I2L19YO4+7oWJ5M1waY/xHyHxTXcDTZ2RUGZyQqjmT3R4X58N87HsPZa4ailJdbas3xMe83+XIADhIlepwxsuZP7Y1vDRVKO8t+n3ePUyE8dUM2e3ata/he9vHW/zPOe4kE8uYrpM2Wgan/pPSqelOorEeoBHrMrKOLoCojofeUjyuLXmP6M4ovQVW79L7txxuug14m1rnmDALbptsw1sKxS/WUfvadt5KjVfUX052nN6B7K+Q/KdnnLekOzuoxFSmB2D26f4GJ0/hIZbcgOcn6GplwfX6kLXKThHuV/7+tkvIx0REsyrEREAREQBJEiSIAMiSZEAREQBERAEREAREQDC7ZY9bT+G63/Eest+Y+UtsA9uweH+HLMhtzDXoVuZykeYK2HzB+cweIqFUSo3eV+1/EpP6k+siVFZnruxNY40WmsQ58rO3F7v1Ol+zTZuatUrMNKYsn4qm8+YQAf7ydHmoezEqcLVy7+uObz6qlb6Wm3ysrO82c9ZNz1E34tejt7CIicyMJhGcUcYAdFrroeBYMBbzu6259Y3KZuYfpVhs+HZl0al94p4jKDmt45C4HiRAMxNS9oWEvTpVhvRirfhqD/rVB/EZs2CxAqU6dQe+qt/MAbfWYDpxi0OEqoDqHw3lc1kbQ+S6+c60W41IvxRyrLipteDNCiIl6UYiIgCIiAJIkSRABkSTIgCIiAIiIAiIgCIiAW+OayXtftJvNvfXSWXShEqlClBaSM2XLTOYXsSr3FlJIOtgN3GXuMF1AC5u0unOxDfpL7bu1RXcf7NSoFBpYAu7jqwKlQiylu0Oe86zhVWb2xjPL8sej/T2m/enJSpSa2472it7prZ353d7S2dsVPZ7tCpg3C11daOItlZlsMwVACL6kEEAHcezvJnTcS1Q5WokMDcEaHfazDUXtbVbi4J1BAnKto9HMS9KlUfDuaDbmqV8ga6lsyoXuost+6L2G82mLbGY7CBWxK1Xw7W6t2zECzEWZqdRC2oIsW4buEr61D4rxafr9Pl3b7GNTKEKrj+5CXP4W3555XxhvOOvcqea3bAG7cSRuF94HG/paericmwPSehV/uNnN+Os9Nvk9Mn6mZiltTB6Z8NhfHq8WCPkyrIrSWDVO+xv7VFG9gPWY+ttrCi61K9JbkqVNRbnyF7m4I+c1mjtDZxPZwFNiNxth2+pqFvpL6pteta2FpUKPJjdz/ImUf8RmLozkp9ENqVlwlOmcNXZ0BH7MoCAxt2qlhu5XmN6V0a4p0s1LqqQawGZTqFsoNmJOgJvc6oJGJ60n/adpv+BKqUfQJS+8I9TMLtJ6b1A1MEhVK52vme+U37fb0y+9qbnTnK08HOqmlzvs7exF1E1Gm03ytyv7lCIiXBUCIiAIiIAkiRJEAGRJMiAIiIAiIgCIiAIJiU3x1Ok9JqqF0zrmQEAsoN2UX0NwCLab94mG7K5mKu7F3RVaVfDvi8PUehmclDSP3oFJwAoYAN23pm97DfeWW1cTTeoTSp9UhJuhqZ8gsAAanFtL21te1yBOiYzo/htsZsRg8c4N7tRqLnWmxABHV3V6ebKDvINrjSYPaPszx6XKLTqdosBTqAfR1UD5mRXO6bf29PrfyPX9h1NHpU3ObUnizva3lz/wDXjjmYttiY84c1VoVFokqVzYg0QzMbKy0tbHtHVgul9Z5pbPxWIpWNOrUp09HXrmrKmYGzimTmW9jqq/FeeMTs/aFCk1OqmLWnpemiu1I2IYbg1OmQQDcW58JYbO23Vs1KjWxaqzLnsSuugCnKoY30GW+t92pmYNxfFePRrLynvbG1stYvmzztOddaxV/3NNZ3vdRTd3jKXF33+J+5aYbY2EpUhXNWolcNTCoEvSfM6K/b90jMTY2HZ0vwyAN9Ze7A2e2IrZKIcsLm1Je4ynMjPmsKYzAXJ10IAJl30xRVx+JpgqWU0s+VcoztQpMxA8SS3mTOsGoy4Eyr/UGloUtTei7qydlayv3W5Ws/Pd7mGZQd4Bnk0l+EfKVInUoQBERAEREAREQBERAEkSJIgAyJJkQBERAEREARMpsbo7isVY0KRKH+8Y5Kf8x738IaYnpZsHEYOv1OJIYOM1Jlv1bDTMtviUkXvrqDxnKdaMfE70dPKo7bFrVx41CWYjefdH+fp8xLvo9tpaFR/tFIYjD1lyV6RAPYvcMg4Mp1tcX53CkYGscrBuBsreGvZPzNvWV5DnVlItqWkpwVt33/AJsbhtHoXWoBNobFrvWom5Q02+/pi+q/+4oIIKML9mxDGZzop7XQbUtoplIOU1qamwI0tUpd5DzK346KJo2wekGKwbl8NVy3N3RhmpOd3aS41sB2lIbQa20m2nauzdq6YzDNh8VbSphznY25ADPV4nJka31mVK5xnSlDodDxG13FNsXh62Hr4a19XCBQLA2rLdbDXQre53iavtP2g7HxNCouIurlWXtUTVZSVIDLVpB0Nt4ZW+U4ztjBrSxOIw6VmdBkBIBp57BXAdNLlTz4rew3S0+yLxJPmbzJzOxbC9rOEFKvWqU6i16pL9Wql1utJKaL1lgNeqB5DMZoOLxtXEVsdj01TraYcEEXDtUSk1zqv7OmLW/vBymu4x7Kd/AacLnf4StQr1KaPkY3dGVgToykd087GxB4EAzKbWwsnh7Gbo49DYNdCdwbTXlfcT4b5dzCVFzL5jT8xN+6E9FaeOwIqUqpp16bMlRX7aH31O/MpyOoJuRdTYTpT1F8SOep0XBmDx4muRMrt3o5icHbr0AVjZXRgyE2JsNzA2BOqjceUxUkppq6ILi4uzEREyYEREAREQBJEiSIAMiSZEAREQBN39m3RijiesxGIXOtNgiI3cLZQzMw98AOoAOl81wdLaQTO4dB9ndRgqCEWZlzuDvDVCXI9M2X+Gcq0rRsd6Ebyv3GeUW0G4TT/apstK+AfMVV6R6ym7GwVkVjqeCkXU+DTcpi9r06YHX1u0tEF1XeuYbmyjvMNLDgdd9iIpMufNOjLqNCNQRz3gieaJ3qd6/UcD/XEGZLblCqmJrisgR2qNUKg3t1v3tr8xnINtLg20tMfUpBt/zBsR6jUTg8YLKLukz1BF/64jcfAy2wdPKX7TNqB2jf3QfTfLmGZTuWG08PUZ2q5mdjqxJuxO69/e3Dx85Sw9YOLHfxEyktcXgg3aXR/wA/P/ObqfeR6lDnEsnYqwUaq3Dfa+ny8J6qAIpty0ub+UrbMxWWohqU1qCm6M1N+64VgSjeDAW4ix3EaGttnEpXxDOlJKAeorLSp91BYXA0A1ykmwAuZvcipXdi4VbADkBN19jW1upxz4cns4gED/5EBqr5XV63yWaUx0NhfwjZeMqU3TEILPTdHVb+9TIOUm3G2UjkTOUXYsKkeJWPoX2hYTrNn4jnTUVBz+7Ic281Vh6zic7tsnFJiqddg2elUIy66ZHw9E2HLvH1JnCnoshKN3kJVvxKbN9QZOoPdFJqFsyIiJ3IwiIgCIiAJIkSRABkTZel/RathqzsqM1FmLIyi4UE3ytbu2va53/lrdpiMk1dGZRcXZkRJtFpkwXexNn/AGjE0KG8VHUMOaC7VP8AgV59CTlHsm2dmxFWuRpSQKvLNUOp8wqf/ZOrXkWq7yJtCNo9SZTdAd4Bsb685TxGIClRvLEAfPUyvecjscI9rSAbTe3GjRb1JqD/AAiafNw9rb32nUt7tKgp8/vG/JxNQtOMtywpfwRb16TEhkNmHPcRyP8AXGeFxdtKgyHnvU+vD1l3aQV8Jg3t3CJb/ZSutM5f3SLr8uHpJp4nXK4yMdwO4+R4+W+LC/eRXphrle8u8cxyP6f95b4QBquYcF+pJt9M0942myt1i+v+vhPWzhfO9rZm/ID9SZtd2sc3BOakXZMo4QkrmPvEn0O76WkYsEgJ8e/8I73+X8UuMvhNTpzOu+xvaKrgnpsSSuIKDw6xUZfQA29JqnTbCdVj8SoFgXzjx6xQ7H+dn+U8ezTFlcQaXCo+GKj95DVY/MKPlNh9rmEtiaNUD9pSKnzpPf8A/b6SVQfxIqtXC1+tzRok2i0mFcREm0WgERJtFoBEkRabJ0P6LVsTWRmRloqwZ2YWDAG+Vb969rXG788SkkrszGLbsj//2Q=="
                    alt=""
                  ></img>
                </div>
                <div className="px-5 py-2">
                  <div className="mb-4">
                    <p className="card-name mt-4">@NFT_Creator</p>
                    <div className="flex mt-2 mb-2">
                      <img
                        src="https://i.postimg.cc/zBDtJMJk/image-1.png"
                        width="30"
                        alt=""
                      />
                      <p className="text-md text-gray-200 flex items-center">
                        {String(
                          "0x3227edf3d8ef577170f339689a128ce229dd8df2"
                        ).substring(0, 6) +
                          "..." +
                          String(
                            "0x3227edf3d8ef577170f339689a128ce229dd8df2"
                          ).substring(38)}
                      </p>
                    </div>
                    <div className="flex">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 59 83"
                        fill="none"
                        className="w-12 mr-1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M46.5611 39.6676L14.6193 55.4641L46.5611 70.6903V82.9687L0.0255025 60.7895L0 48.7033L32.3818 32.7017L0.0255025 17.2833V5.00488L46.5611 27.1841V39.6676Z"
                          fill="url(#paint0_linear_0_1)"
                        />
                        <path
                          d="M0.0249023 5.00491L12.3235 0L58.8591 22.1728L46.5606 27.1842L0.0249023 5.00491Z"
                          fill="url(#paint1_linear_0_1)"
                        />
                        <path
                          d="M46.5612 70.6905V46.1466L58.8597 40.4624V77.9576L46.5612 82.9689V70.6905Z"
                          fill="url(#paint2_linear_0_1)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_0_1"
                            x1="46.593"
                            y1="83.4429"
                            x2="7.44516"
                            y2="17.8244"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#05707E" />
                            <stop offset="0.52" stop-color="#2B9297" />
                            <stop offset="1" stop-color="#4DBBBA" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_0_1"
                            x1="2.3265"
                            y1="3.81937"
                            x2="57.7694"
                            y2="23.5946"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#05707E" />
                            <stop offset="0.52" stop-color="#2B9297" />
                            <stop offset="1" stop-color="#4DBBBA" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_0_1"
                            x1="52.5606"
                            y1="37.7901"
                            x2="52.8505"
                            y2="82.8535"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#05707E" />
                            <stop offset="0.52" stop-color="#2B9297" />
                            <stop offset="1" stop-color="#4DBBBA" />
                          </linearGradient>
                        </defs>
                      </svg>

                      <p className="text-lg text-white flex items-center">
                        0.18
                      </p>
                      <a
                        href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20profile%20on%20Zilsbt%3A%0A%0Ahttp%3A//localhost%3A3000/profiles/0x3227edf3d8ef577170f339689a128ce229dd8df2`}
                        className="ml-auto mr-6 w-5 pl-4"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_58_309)">
                            <path
                              d="M16.5002 3.74998C16.5 2.87013 16.8093 2.01826 17.3739 1.3434C17.9384 0.668542 18.7223 0.213678 19.5883 0.0583884C20.4543 -0.0969011 21.3474 0.0572728 22.1112 0.493936C22.8751 0.9306 23.4611 1.62195 23.7667 2.44702C24.0723 3.27209 24.078 4.17835 23.7829 5.00724C23.4879 5.83613 22.9107 6.53487 22.1525 6.9812C21.3942 7.42753 20.5032 7.59304 19.6352 7.44876C18.7673 7.30448 17.9777 6.85961 17.4047 6.19198L7.32765 10.872C7.55932 11.6061 7.55932 12.3938 7.32765 13.128L17.4047 17.808C18.0104 17.1035 18.8561 16.6489 19.7779 16.5325C20.6997 16.416 21.632 16.6458 22.3939 17.1775C23.1559 17.7092 23.6934 18.5048 23.9022 19.4102C24.1109 20.3155 23.9762 21.2662 23.524 22.0778C23.0719 22.8895 22.3345 23.5044 21.4548 23.8034C20.5751 24.1024 19.6157 24.0642 18.7626 23.6961C17.9095 23.328 17.2233 22.6564 16.8372 21.8113C16.4511 20.9662 16.3925 20.0079 16.6727 19.122L6.59565 14.442C6.09681 15.0233 5.43188 15.438 4.69032 15.6301C3.94876 15.8222 3.16615 15.7827 2.44776 15.5167C1.72937 15.2507 1.10967 14.7711 0.672015 14.1424C0.234362 13.5137 -0.000244141 12.766 -0.000244141 12C-0.000244141 11.2339 0.234362 10.4863 0.672015 9.85755C1.10967 9.22884 1.72937 8.74923 2.44776 8.48326C3.16615 8.21729 3.94876 8.17772 4.69032 8.36985C5.43188 8.56199 6.09681 8.97663 6.59565 9.55798L16.6727 4.87798C16.5579 4.51298 16.4998 4.13258 16.5002 3.74998Z"
                              fill="#E6E6E6"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_58_309">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* social proof */}
      <div className="social-proof">
        <ul className="flex justify-between items-center container mx-auto 2xl:px-24 sm:px-6">
          <li>
            <svg
              width="333"
              height="117"
              viewBox="0 0 333 117"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M124.569 61.3464H139.852C139.852 62.9064 139.774 64.3494 139.656 65.6364C139.539 66.9234 139.265 68.0934 138.875 69.1854C138.327 70.7454 137.585 72.1104 136.647 73.3194C135.709 74.4894 134.575 75.5034 133.324 76.2834C132.074 77.0634 130.666 77.6874 129.142 78.0774C127.618 78.5064 126.015 78.7014 124.334 78.7014C122.028 78.7014 119.918 78.3114 118.002 77.5704C116.126 76.8294 114.485 75.7374 113.117 74.4114C111.749 73.0074 110.693 71.3694 109.951 69.4584C109.208 67.5084 108.817 65.4024 108.817 63.0624C108.817 60.7614 109.169 58.6554 109.911 56.7444C110.654 54.7944 111.749 53.1564 113.077 51.7914C114.485 50.4264 116.126 49.3734 118.081 48.6324C120.035 47.8914 122.185 47.5014 124.569 47.5014C127.657 47.5014 130.354 48.1644 132.699 49.4904C135.044 50.8164 136.881 52.8834 138.249 55.6914L130.94 58.6944C130.276 57.0564 129.377 55.9254 128.282 55.2234C127.227 54.5214 125.976 54.1704 124.608 54.1704C123.474 54.1704 122.419 54.4044 121.481 54.8334C120.543 55.2624 119.722 55.8474 119.058 56.6664C118.393 57.4464 117.885 58.4214 117.494 59.5134C117.142 60.6444 116.947 61.8924 116.947 63.2574C116.947 64.5054 117.103 65.6754 117.416 66.7284C117.768 67.7814 118.237 68.7174 118.901 69.4974C119.566 70.2774 120.387 70.9014 121.325 71.3304C122.302 71.7594 123.435 71.9544 124.686 71.9544C125.429 71.9544 126.171 71.8764 126.875 71.7204C127.579 71.5254 128.204 71.2524 128.751 70.9014C129.337 70.5114 129.807 70.0044 130.158 69.4194C130.51 68.8344 130.784 68.0934 130.901 67.2354H124.569V61.3464ZM177.844 54.5214V78.7014H169.636V54.5214H162.991V47.5014H184.489V54.5214H177.844ZM213.022 58.1874C211.224 56.0034 209.035 54.9114 206.416 54.9114C205.244 54.9114 204.188 55.1064 203.172 55.5354C202.195 55.9644 201.374 56.5494 200.631 57.2514C199.928 57.9534 199.342 58.8114 198.951 59.8254C198.56 60.8394 198.364 61.8924 198.364 63.0624C198.364 64.2324 198.56 65.3244 198.951 66.3384C199.381 67.3524 199.928 68.2104 200.631 68.9514C201.374 69.6924 202.234 70.2774 203.211 70.6674C204.188 71.0964 205.244 71.2914 206.377 71.2914C208.84 71.2914 211.067 70.2384 213.022 68.1324V77.2584L212.24 77.5314C211.067 77.9604 209.973 78.2334 208.918 78.4284C207.901 78.6234 206.885 78.7404 205.869 78.7404C203.836 78.7404 201.843 78.3504 199.967 77.6094C198.091 76.8294 196.449 75.7374 195.003 74.3334C193.596 72.9294 192.423 71.2524 191.563 69.3414C190.703 67.3914 190.273 65.2854 190.273 63.0234C190.273 60.7614 190.703 58.6554 191.524 56.7834C192.384 54.8724 193.518 53.2344 194.964 51.8694C196.41 50.4654 198.091 49.4124 199.967 48.6324C201.843 47.8524 203.836 47.4624 205.908 47.4624C207.081 47.4624 208.253 47.5794 209.387 47.8524C210.559 48.0864 211.771 48.4764 213.022 48.9834V58.1874ZM229.125 63.1014C229.125 64.2714 229.36 65.3634 229.79 66.3774C230.22 67.3914 230.845 68.2494 231.588 68.9904C232.331 69.7314 233.23 70.3164 234.246 70.7064C235.262 71.0964 236.356 71.2914 237.49 71.2914C238.624 71.2914 239.679 71.0964 240.695 70.7064C241.711 70.2774 242.61 69.6924 243.392 68.9904C244.174 68.2494 244.799 67.3914 245.229 66.3774C245.659 65.3634 245.894 64.3104 245.894 63.1014C245.894 61.8924 245.659 60.8394 245.229 59.8254C244.799 58.8114 244.174 57.9534 243.392 57.2124C242.649 56.4714 241.75 55.9254 240.695 55.5354C239.679 55.1064 238.624 54.9114 237.49 54.9114C236.356 54.9114 235.301 55.1064 234.246 55.5354C233.23 55.9254 232.37 56.5104 231.588 57.2124C230.845 57.9534 230.22 58.8114 229.79 59.8254C229.36 60.8394 229.125 61.9314 229.125 63.1014ZM221.074 63.1014C221.074 60.9174 221.465 58.8504 222.285 56.9784C223.106 55.0674 224.24 53.3904 225.686 51.9864C227.132 50.5824 228.852 49.4514 230.845 48.6714C232.878 47.8524 235.106 47.4624 237.49 47.4624C239.874 47.4624 242.102 47.8524 244.096 48.6714C246.128 49.4514 247.848 50.5434 249.294 51.9864C250.779 53.3904 251.913 55.0674 252.734 56.9784C253.555 58.8504 253.945 60.9174 253.945 63.1014C253.945 65.2854 253.555 67.3524 252.734 69.2634C251.913 71.1354 250.779 72.8124 249.294 74.2164C247.848 75.6204 246.128 76.7514 244.096 77.5704C242.063 78.3504 239.874 78.7404 237.49 78.7404C235.067 78.7404 232.839 78.3504 230.845 77.5704C228.852 76.7514 227.132 75.6594 225.686 74.2164C224.24 72.8124 223.106 71.1354 222.285 69.2634C221.465 67.3524 221.074 65.3244 221.074 63.1014ZM270.088 47.5014V78.7014H261.88V47.5014H270.088ZM155.174 47.5014V78.7014H146.966V47.5014H155.174ZM278.687 78.7014V47.5014H286.505L301.748 66.5724V47.5014H309.957V78.7014H302.061L286.895 59.6304V78.7014H278.687Z"
                fill="#E6E6E6"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M77.3652 49.31C80.0841 53.1125 81.56 57.7301 81.5213 62.3863C81.5213 66.9649 80.0454 71.5435 77.3652 75.2684L83.0359 79.5752C86.6479 74.6085 88.6288 68.5557 88.6288 62.4249C88.6679 55.9451 86.5314 49.5818 82.6087 44.46L79.3567 47.385L77.3652 49.31Z"
                fill="#15EBB7"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M88.0851 83.3901L69.0148 68.9172C70.3742 67.1321 71.1508 64.9595 71.2673 62.7088C71.3451 60.4585 70.7627 58.2468 69.5585 56.3455L78.6859 48.1196L88.2407 39.1953C88.8621 38.6131 88.9008 37.6043 88.2794 36.9835L86.959 35.6642C80.1619 28.7964 70.9957 24.7998 61.3632 24.4894L61.4023 19.2512C61.441 18.902 61.4023 18.5528 61.3245 18.2036C61.208 17.8544 61.0524 17.5439 60.8195 17.2723C60.5865 17.0007 60.3145 16.8067 59.965 16.6515C59.6543 16.4963 59.3049 16.4187 58.955 16.4187C58.6056 16.4187 58.2562 16.4963 57.9454 16.6515C57.6347 16.8067 57.324 17.0007 57.091 17.2723C56.8577 17.5439 56.6634 17.8544 56.586 18.1648C56.4695 18.514 56.4304 18.8632 56.5082 19.2124L56.4695 24.6058C54.1779 24.8386 51.8862 25.2654 49.6724 25.9251L49.7111 19.2124C49.7502 18.8632 49.7111 18.514 49.6337 18.1648C49.5172 17.8156 49.3616 17.5051 49.1287 17.2335C48.8957 16.9619 48.6237 16.7679 48.2743 16.6127C47.9635 16.4575 47.6137 16.3799 47.2642 16.3799C46.9148 16.3799 46.565 16.4575 46.2546 16.6127C45.9439 16.7679 45.6332 16.9619 45.3998 17.2335C45.1669 17.5051 44.9726 17.8156 44.8952 18.126C44.7783 18.4752 44.7397 18.8244 44.8174 19.1736L44.701 27.7487C36.8552 31.2408 30.4077 37.3327 26.4849 44.9766C22.562 52.6206 21.3191 61.3898 23.0281 69.8095C24.7371 78.2296 29.2814 85.8346 35.8842 91.3445C42.4871 96.854 50.7989 99.9584 59.3823 100.114L87.1529 100.23C88.0077 100.23 88.7066 99.5314 88.7066 98.6777V84.6704C88.7066 84.1662 88.4736 83.7005 88.0851 83.3901ZM59.9263 93.362C53.0905 93.3234 46.4485 91.0341 41.0499 86.8821C35.6511 82.6916 31.7671 76.8326 30.0193 70.2362C28.2715 63.6401 28.7765 56.617 31.3787 50.3313C34.0198 44.0453 38.6418 38.7683 44.5845 35.3538L44.5454 45.5585C44.5067 45.908 44.5454 46.257 44.6232 46.6061C44.7397 46.9555 44.8952 47.2659 45.1282 47.5374C45.3611 47.8092 45.6332 48.003 45.9826 48.1583C46.2933 48.3135 46.6428 48.3911 46.9926 48.3911C47.342 48.3911 47.6915 48.3135 48.0022 48.1583C48.3129 48.003 48.6237 47.8092 48.8566 47.5374C49.0896 47.2659 49.2839 46.9555 49.3616 46.6451C49.4781 46.296 49.5172 45.9466 49.4394 45.5975L49.4781 33.0645C52.8962 31.8229 56.5082 31.2408 60.1593 31.2408C66.8787 31.2408 73.4038 33.4525 78.7246 37.4879C79.1132 37.7983 79.1519 38.3415 78.8024 38.6907L64.2763 51.9997C62.9556 51.4565 61.5187 51.146 60.0815 51.146C58.4891 51.146 56.8967 51.4565 55.4208 52.116C53.9449 52.7758 52.6629 53.7458 51.6142 54.9485C50.5659 56.1513 49.7889 57.5869 49.3229 59.1005C48.8566 60.6523 48.7402 62.2431 48.9731 63.8339C49.2065 65.4251 49.7502 66.9383 50.6046 68.2963C51.459 69.6543 52.6242 70.7794 53.9449 71.6721C55.3044 72.5254 56.819 73.1077 58.4114 73.3405C60.0037 73.5734 61.6352 73.4568 63.1498 72.9911L81.7156 87.0763C81.9098 87.2316 82.0263 87.464 82.0263 87.6968L81.9872 92.6635C81.9872 93.0905 81.6378 93.4396 81.2106 93.4396L59.9263 93.362ZM64.4706 62.3207C64.4706 63.1744 64.1985 64.0281 63.7326 64.7652C63.2276 65.5027 62.5674 66.0456 61.7517 66.395C60.936 66.7441 60.0428 66.8217 59.2271 66.6279C58.4114 66.4337 57.5956 66.0456 56.9741 65.4251C56.3531 64.8042 55.9254 64.0281 55.7703 63.1744C55.6151 62.3207 55.6925 61.4284 56.0423 60.6523C56.3918 59.8376 56.9354 59.1781 57.6734 58.6734C58.4114 58.2078 59.2658 57.9363 60.1202 57.9363C61.2854 57.9363 62.4119 58.402 63.2276 59.2557C64.0043 60.0314 64.4706 61.118 64.4706 62.3207Z"
                fill="#E6E6E6"
              />
            </svg>
          </li>
          <li>
            <svg
              width="295"
              height="83"
              viewBox="0 0 295 83"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M115.016 57.9441H133.563V63.4424H105.427L124.401 30.1191H108.532V24.6079H133.99L115.016 57.9441Z"
                fill="url(#paint0_linear_37_237)"
              />
              <path
                d="M146.187 24.6079V63.4424H140.359V24.6079H146.187Z"
                fill="url(#paint1_linear_37_237)"
              />
              <path
                d="M161.303 24.6079V57.9313H172.671V63.4424H155.457V24.6079H161.303Z"
                fill="url(#paint2_linear_37_237)"
              />
              <path
                d="M184.045 24.6079V57.9313H195.406V63.4424H178.192V24.6079H184.045Z"
                fill="url(#paint3_linear_37_237)"
              />
              <path
                d="M206.755 24.6079V63.4424H200.928V24.6079H206.755Z"
                fill="url(#paint4_linear_37_237)"
              />
              <path
                d="M255.376 64.1603H248.044L245.009 61.0394C241.802 63.1147 238.06 64.1997 234.247 64.1603C229.21 64.2008 224.34 62.3444 220.597 58.9567C218.494 57.1383 216.822 54.872 215.7 52.3224C214.578 49.7729 214.036 47.0041 214.112 44.2175C214.046 41.4796 214.559 38.7586 215.616 36.2344C216.673 33.7103 218.251 31.4403 220.246 29.5745C223.875 26.0471 228.688 24.0149 233.734 23.8784C238.781 23.742 243.695 25.5114 247.508 28.8375C252.183 32.8278 254.521 38.0356 254.521 44.461C254.521 49.4937 252.679 53.9625 248.994 57.8673L255.376 64.1603ZM239.334 48.0625L244.939 53.6762C246.161 52.402 247.118 50.8956 247.754 49.245C248.39 47.5945 248.692 45.833 248.643 44.0637C248.686 42.134 248.343 40.2153 247.633 38.4218C246.924 36.6283 245.862 34.9968 244.511 33.6245C243.186 32.2444 241.59 31.1559 239.824 30.4279C238.058 29.6998 236.161 29.3481 234.253 29.395C232.352 29.3379 230.461 29.6852 228.703 30.4141C226.945 31.143 225.36 32.237 224.052 33.6245C221.366 36.4228 220.023 39.9688 220.023 44.2624C220.023 48.462 221.408 51.8926 224.18 54.5542C225.476 55.8617 227.016 56.8993 228.712 57.6075C230.407 58.3157 232.225 58.6805 234.062 58.6811C236.452 58.715 238.809 58.116 240.896 56.9445L231.811 48.1074L239.334 48.0625Z"
                fill="url(#paint5_linear_37_237)"
              />
              <path
                d="M284.538 54.0224H268.012L263.708 63.4427H257.428L276.555 22.1602L295 63.4427H288.624L284.538 54.0224ZM282.159 48.5112L276.421 35.3037L270.416 48.5112H282.159Z"
                fill="url(#paint6_linear_37_237)"
              />
              <path
                d="M46.5611 39.6676L14.6193 55.4641L46.5611 70.6903V82.9687L0.0255025 60.7895L0 48.7033L32.3818 32.7017L0.0255025 17.2833V5.00488L46.5611 27.1841V39.6676Z"
                fill="url(#paint7_linear_37_237)"
              />
              <path
                d="M0.0248976 5.00491L12.3235 0L58.8591 22.1728L46.5605 27.1842L0.0248976 5.00491Z"
                fill="url(#paint8_linear_37_237)"
              />
              <path
                d="M46.5611 39.6676L58.8597 34.6563V22.1729L46.5611 27.1842V39.6676Z"
                fill="url(#paint9_linear_37_237)"
              />
              <path
                d="M46.5611 70.6905V46.1466L58.8597 40.4624V77.9576L46.5611 82.9689V70.6905Z"
                fill="url(#paint10_linear_37_237)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_37_237"
                  x1="65.1397"
                  y1="42.8717"
                  x2="409.119"
                  y2="50.1282"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#05707E" />
                  <stop offset="0.52" stop-color="#2B9297" />
                  <stop offset="1" stop-color="#4DBBBA" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_37_237"
                  x1="65.1461"
                  y1="42.3654"
                  x2="409.132"
                  y2="49.6283"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#05707E" />
                  <stop offset="0.52" stop-color="#2B9297" />
                  <stop offset="1" stop-color="#4DBBBA" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_37_237"
                  x1="65.1526"
                  y1="42.0386"
                  x2="409.138"
                  y2="49.2951"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#05707E" />
                  <stop offset="0.52" stop-color="#2B9297" />
                  <stop offset="1" stop-color="#4DBBBA" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_37_237"
                  x1="65.1652"
                  y1="41.5515"
                  x2="409.151"
                  y2="48.8144"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#05707E" />
                  <stop offset="0.52" stop-color="#2B9297" />
                  <stop offset="1" stop-color="#4DBBBA" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_37_237"
                  x1="65.1777"
                  y1="41.0773"
                  x2="409.157"
                  y2="48.3339"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#05707E" />
                  <stop offset="0.52" stop-color="#2B9297" />
                  <stop offset="1" stop-color="#4DBBBA" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_37_237"
                  x1="65.1907"
                  y1="40.411"
                  x2="409.17"
                  y2="47.6675"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#05707E" />
                  <stop offset="0.52" stop-color="#2B9297" />
                  <stop offset="1" stop-color="#4DBBBA" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_37_237"
                  x1="65.2289"
                  y1="38.5078"
                  x2="409.214"
                  y2="45.7707"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#05707E" />
                  <stop offset="0.52" stop-color="#2B9297" />
                  <stop offset="1" stop-color="#4DBBBA" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear_37_237"
                  x1="46.593"
                  y1="83.4429"
                  x2="7.44516"
                  y2="17.8244"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#05707E" />
                  <stop offset="0.52" stop-color="#2B9297" />
                  <stop offset="1" stop-color="#4DBBBA" />
                </linearGradient>
                <linearGradient
                  id="paint8_linear_37_237"
                  x1="2.3265"
                  y1="3.81937"
                  x2="57.7694"
                  y2="23.5946"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#05707E" />
                  <stop offset="0.52" stop-color="#2B9297" />
                  <stop offset="1" stop-color="#4DBBBA" />
                </linearGradient>
                <linearGradient
                  id="paint9_linear_37_237"
                  x1="46.5611"
                  y1="30.9202"
                  x2="58.8597"
                  y2="30.9202"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#05707E" />
                  <stop offset="0.52" stop-color="#2B9297" />
                  <stop offset="1" stop-color="#4DBBBA" />
                </linearGradient>
                <linearGradient
                  id="paint10_linear_37_237"
                  x1="52.5606"
                  y1="37.7901"
                  x2="52.8505"
                  y2="82.8535"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#05707E" />
                  <stop offset="0.52" stop-color="#2B9297" />
                  <stop offset="1" stop-color="#4DBBBA" />
                </linearGradient>
              </defs>
            </svg>
          </li>
          <li className="pr-2">
            <svg
              width="333"
              height="117"
              viewBox="0 0 111 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_5_8)">
                <path
                  d="M13.6 27.18C10.9122 27.178 8.28528 26.379 6.05151 24.8841C3.81775 23.3892 2.07745 21.2654 1.05068 18.7814C0.0239117 16.2974 -0.243205 13.5647 0.283108 10.9289C0.809421 8.29311 2.10552 5.87255 4.00752 3.97336C5.90951 2.07416 8.33197 0.78162 10.9686 0.259187C13.6051 -0.263246 16.3374 0.00789142 18.8199 1.03831C21.3024 2.06873 23.4236 3.81216 24.9152 6.04812C26.4069 8.28408 27.202 10.9122 27.2 13.6C27.1921 17.2027 25.756 20.6552 23.2067 23.2008C20.6573 25.7464 17.2027 27.1774 13.6 27.18V27.18ZM13.6 2C11.3086 2.00198 9.06916 2.68315 7.16473 3.95744C5.2603 5.23172 3.77633 7.04193 2.90035 9.15932C2.02437 11.2767 1.79569 13.6062 2.24321 15.8535C2.69073 18.1009 3.79437 20.1651 5.41466 21.7854C7.03495 23.4057 9.09917 24.5093 11.3465 24.9568C13.5938 25.4043 15.9233 25.1757 18.0407 24.2997C20.1581 23.4237 21.9683 21.9397 23.2426 20.0353C24.5169 18.1309 25.198 15.8914 25.2 13.6C25.1947 10.5251 23.9709 7.57768 21.7966 5.4034C19.6223 3.22913 16.6749 2.00529 13.6 2V2Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M12.82 9.89998V12.43H14.42V9.89998L16.51 11.11L17.28 9.89998L15.12 8.57998L17.28 7.25998L16.51 6.04998L14.42 7.25998V4.72998H12.82V7.25998L10.82 6.04998L10 7.25998L12.2 8.57998L10 9.89998L10.78 11.11L12.82 9.89998ZM18 17.79V20.31H19.56V17.79L21.63 19L22.41 17.8L20.25 16.47L22.41 15.19L21.63 14L19.55 15.2V12.62H18V15.18L15.9 14L15.13 15.2L17.29 16.52L15.13 17.85L15.9 19L18 17.79ZM8.13002 17.79V20.31H9.69002V17.79L11.82 19L12.59 17.8L10.43 16.47L12.55 15.19L11.82 13.95L9.69002 15.18V12.62H8.13002V15.18L6.05002 14L5.27002 15.2L7.43002 16.5L5.27002 17.83L6.05002 19L8.13002 17.79Z"
                  fill="#E6E6E6"
                />
              </g>
              <path
                d="M32.642 19L30.2557 10.2727H31.3295L33.1534 17.3807H33.2386L35.0966 10.2727H36.2898L38.1477 17.3807H38.233L40.0568 10.2727H41.1307L38.7443 19H37.6534L35.7273 12.0455H35.6591L33.733 19H32.642ZM44.446 19.1364C43.8153 19.1364 43.2713 18.9972 42.8139 18.7188C42.3594 18.4375 42.0085 18.0455 41.7614 17.5426C41.517 17.0369 41.3949 16.4489 41.3949 15.7784C41.3949 15.108 41.517 14.517 41.7614 14.0057C42.0085 13.4915 42.3523 13.0909 42.7926 12.804C43.2358 12.5142 43.7528 12.3693 44.3438 12.3693C44.6847 12.3693 45.0213 12.4261 45.3537 12.5398C45.6861 12.6534 45.9886 12.8381 46.2614 13.0938C46.5341 13.3466 46.7514 13.6818 46.9134 14.0994C47.0753 14.517 47.1562 15.0312 47.1562 15.642V16.0682H42.1108V15.1989H46.1335C46.1335 14.8295 46.0597 14.5 45.9119 14.2102C45.767 13.9205 45.5597 13.6918 45.2898 13.5241C45.0227 13.3565 44.7074 13.2727 44.3438 13.2727C43.9432 13.2727 43.5966 13.3722 43.304 13.571C43.0142 13.767 42.7912 14.0227 42.6349 14.3381C42.4787 14.6534 42.4006 14.9915 42.4006 15.3523V15.9318C42.4006 16.4261 42.4858 16.8452 42.6562 17.1889C42.8295 17.5298 43.0696 17.7898 43.3764 17.9688C43.6832 18.1449 44.0398 18.233 44.446 18.233C44.7102 18.233 44.9489 18.196 45.1619 18.1222C45.3778 18.0455 45.5639 17.9318 45.7202 17.7812C45.8764 17.6278 45.9972 17.4375 46.0824 17.2102L47.054 17.483C46.9517 17.8125 46.7798 18.1023 46.5384 18.3523C46.2969 18.5994 45.9986 18.7926 45.6435 18.9318C45.2884 19.0682 44.8892 19.1364 44.446 19.1364ZM48.8224 19V10.2727H49.8281V13.4943H49.9134C49.9872 13.3807 50.0895 13.2358 50.2202 13.0597C50.3537 12.8807 50.544 12.7216 50.7912 12.5824C51.0412 12.4403 51.3793 12.3693 51.8054 12.3693C52.3565 12.3693 52.8423 12.5071 53.2628 12.7827C53.6832 13.0582 54.0114 13.4489 54.2472 13.9545C54.483 14.4602 54.6009 15.0568 54.6009 15.7443C54.6009 16.4375 54.483 17.0384 54.2472 17.5469C54.0114 18.0526 53.6847 18.4446 53.267 18.723C52.8494 18.9986 52.3679 19.1364 51.8224 19.1364C51.402 19.1364 51.0653 19.0668 50.8125 18.9276C50.5597 18.7855 50.3651 18.625 50.2287 18.446C50.0923 18.2642 49.9872 18.1136 49.9134 17.9943H49.794V19H48.8224ZM49.8111 15.7273C49.8111 16.2216 49.8835 16.6577 50.0284 17.0355C50.1733 17.4105 50.3849 17.7045 50.6634 17.9176C50.9418 18.1278 51.2827 18.233 51.6861 18.233C52.1065 18.233 52.4574 18.1222 52.7386 17.9006C53.0227 17.6761 53.2358 17.375 53.3778 16.9972C53.5227 16.6165 53.5952 16.1932 53.5952 15.7273C53.5952 15.267 53.5241 14.8523 53.3821 14.483C53.2429 14.1108 53.0313 13.8168 52.7472 13.6009C52.4659 13.3821 52.1122 13.2727 51.6861 13.2727C51.277 13.2727 50.9332 13.3764 50.6548 13.5838C50.3764 13.7884 50.1662 14.0753 50.0241 14.4446C49.8821 14.8111 49.8111 15.2386 49.8111 15.7273ZM59.071 19.1193C58.5085 19.1193 58.0071 19.0227 57.5668 18.8295C57.1293 18.6364 56.7813 18.3679 56.5227 18.0241C56.267 17.6776 56.1278 17.2756 56.1051 16.8182H57.179C57.2017 17.0994 57.2983 17.3423 57.4688 17.5469C57.6392 17.7486 57.8622 17.9048 58.1378 18.0156C58.4134 18.1264 58.7188 18.1818 59.054 18.1818C59.429 18.1818 59.7614 18.1165 60.0511 17.9858C60.3409 17.8551 60.5682 17.6733 60.733 17.4403C60.8977 17.2074 60.9801 16.9375 60.9801 16.6307C60.9801 16.3097 60.9006 16.027 60.7415 15.7827C60.5824 15.5355 60.3494 15.3423 60.0426 15.2031C59.7358 15.0639 59.3608 14.9943 58.9176 14.9943H58.2188V14.0568H58.9176C59.2642 14.0568 59.5682 13.9943 59.8295 13.8693C60.0938 13.7443 60.2997 13.5682 60.4474 13.3409C60.598 13.1136 60.6733 12.8466 60.6733 12.5398C60.6733 12.2443 60.608 11.9872 60.4773 11.7685C60.3466 11.5497 60.1619 11.3793 59.9233 11.2571C59.6875 11.1349 59.4091 11.0739 59.0881 11.0739C58.7869 11.0739 58.5028 11.1293 58.2358 11.2401C57.9716 11.348 57.7557 11.5057 57.5881 11.7131C57.4205 11.9176 57.3295 12.1648 57.3153 12.4545H56.2926C56.3097 11.9972 56.4474 11.5966 56.706 11.2528C56.9645 10.9062 57.3026 10.6364 57.7202 10.4432C58.1406 10.25 58.6023 10.1534 59.1051 10.1534C59.6449 10.1534 60.108 10.2628 60.4943 10.4815C60.8807 10.6974 61.1776 10.983 61.3849 11.3381C61.5923 11.6932 61.696 12.0767 61.696 12.4886C61.696 12.9801 61.5668 13.3991 61.3082 13.7457C61.0526 14.0923 60.7045 14.3324 60.2642 14.4659V14.5341C60.8153 14.625 61.2457 14.8594 61.5554 15.2372C61.8651 15.6122 62.0199 16.0767 62.0199 16.6307C62.0199 17.1051 61.8906 17.5312 61.6321 17.9091C61.3764 18.2841 61.027 18.5795 60.5838 18.7955C60.1406 19.0114 59.6364 19.1193 59.071 19.1193ZM64.2433 19.0682C64.033 19.0682 63.8526 18.9929 63.7021 18.8423C63.5515 18.6918 63.4762 18.5114 63.4762 18.3011C63.4762 18.0909 63.5515 17.9105 63.7021 17.7599C63.8526 17.6094 64.033 17.5341 64.2433 17.5341C64.4535 17.5341 64.6339 17.6094 64.7844 17.7599C64.935 17.9105 65.0103 18.0909 65.0103 18.3011C65.0103 18.4403 64.9748 18.5682 64.9038 18.6847C64.8356 18.8011 64.7433 18.8949 64.6268 18.9659C64.5131 19.0341 64.3853 19.0682 64.2433 19.0682ZM71.7241 12.4545C71.6729 12.0227 71.4656 11.6875 71.1019 11.4489C70.7383 11.2102 70.2923 11.0909 69.7638 11.0909C69.3775 11.0909 69.0394 11.1534 68.7496 11.2784C68.4627 11.4034 68.2383 11.5753 68.0763 11.794C67.9173 12.0128 67.8377 12.2614 67.8377 12.5398C67.8377 12.7727 67.8931 12.973 68.0039 13.1406C68.1175 13.3054 68.2624 13.4432 68.4386 13.554C68.6147 13.6619 68.7994 13.7514 68.9925 13.8224C69.1857 13.8906 69.3633 13.946 69.5252 13.9886L70.4116 14.2273C70.6388 14.2869 70.8917 14.3693 71.1701 14.4744C71.4513 14.5795 71.7198 14.723 71.9755 14.9048C72.234 15.0838 72.4471 15.3139 72.6147 15.5952C72.7823 15.8764 72.8661 16.2216 72.8661 16.6307C72.8661 17.1023 72.7425 17.5284 72.4954 17.9091C72.2511 18.2898 71.8931 18.5923 71.4215 18.8168C70.9528 19.0412 70.3832 19.1534 69.7127 19.1534C69.0877 19.1534 68.5465 19.0526 68.0891 18.8509C67.6346 18.6491 67.2766 18.3679 67.0153 18.0071C66.7567 17.6463 66.6104 17.2273 66.5763 16.75H67.6673C67.6957 17.0795 67.8065 17.3523 67.9996 17.5682C68.1957 17.7812 68.4428 17.9403 68.7411 18.0455C69.0423 18.1477 69.3661 18.1989 69.7127 18.1989C70.1161 18.1989 70.4783 18.1335 70.7994 18.0028C71.1204 17.8693 71.3746 17.6847 71.5621 17.4489C71.7496 17.2102 71.8434 16.9318 71.8434 16.6136C71.8434 16.3239 71.7624 16.0881 71.6005 15.9062C71.4386 15.7244 71.2255 15.5767 70.9613 15.4631C70.6971 15.3494 70.4116 15.25 70.1048 15.1648L69.0309 14.858C68.3491 14.6619 67.8093 14.3821 67.4116 14.0185C67.0138 13.6548 66.815 13.179 66.815 12.5909C66.815 12.1023 66.9471 11.6761 67.2113 11.3125C67.4783 10.946 67.8363 10.6619 68.2852 10.4602C68.7369 10.2557 69.2411 10.1534 69.7979 10.1534C70.3604 10.1534 70.8604 10.2543 71.2979 10.456C71.7354 10.6548 72.082 10.9276 72.3377 11.2741C72.5962 11.6207 72.7326 12.0142 72.7468 12.4545H71.7241ZM77.3139 12.4545V13.3068H73.9219V12.4545H77.3139ZM74.9105 10.8864H75.9162V17.125C75.9162 17.4091 75.9574 17.6222 76.0398 17.7642C76.125 17.9034 76.233 17.9972 76.3636 18.0455C76.4972 18.0909 76.6378 18.1136 76.7855 18.1136C76.8963 18.1136 76.9872 18.108 77.0582 18.0966C77.1293 18.0824 77.1861 18.071 77.2287 18.0625L77.4332 18.9659C77.3651 18.9915 77.2699 19.017 77.1477 19.0426C77.0256 19.071 76.8707 19.0852 76.6832 19.0852C76.3991 19.0852 76.1207 19.0241 75.848 18.902C75.5781 18.7798 75.3537 18.5938 75.1747 18.3438C74.9986 18.0938 74.9105 17.7784 74.9105 17.3977V10.8864ZM81.4155 19.1364C80.8246 19.1364 80.3061 18.9957 79.8601 18.7145C79.4169 18.4332 79.0703 18.0398 78.8203 17.5341C78.5732 17.0284 78.4496 16.4375 78.4496 15.7614C78.4496 15.0795 78.5732 14.4844 78.8203 13.9759C79.0703 13.4673 79.4169 13.0724 79.8601 12.7912C80.3061 12.5099 80.8246 12.3693 81.4155 12.3693C82.0064 12.3693 82.5234 12.5099 82.9666 12.7912C83.4126 13.0724 83.7592 13.4673 84.0064 13.9759C84.2564 14.4844 84.3814 15.0795 84.3814 15.7614C84.3814 16.4375 84.2564 17.0284 84.0064 17.5341C83.7592 18.0398 83.4126 18.4332 82.9666 18.7145C82.5234 18.9957 82.0064 19.1364 81.4155 19.1364ZM81.4155 18.233C81.8643 18.233 82.2337 18.1179 82.5234 17.8878C82.8132 17.6577 83.0277 17.3551 83.1669 16.9801C83.3061 16.6051 83.3757 16.1989 83.3757 15.7614C83.3757 15.3239 83.3061 14.9162 83.1669 14.5384C83.0277 14.1605 82.8132 13.8551 82.5234 13.6222C82.2337 13.3892 81.8643 13.2727 81.4155 13.2727C80.9666 13.2727 80.5973 13.3892 80.3075 13.6222C80.0178 13.8551 79.8033 14.1605 79.6641 14.5384C79.5249 14.9162 79.4553 15.3239 79.4553 15.7614C79.4553 16.1989 79.5249 16.6051 79.6641 16.9801C79.8033 17.3551 80.0178 17.6577 80.3075 17.8878C80.5973 18.1179 80.9666 18.233 81.4155 18.233ZM85.9165 19V12.4545H86.8881V13.4432H86.9563C87.0756 13.1193 87.2915 12.8565 87.604 12.6548C87.9165 12.4531 88.2688 12.3523 88.6609 12.3523C88.7347 12.3523 88.8271 12.3537 88.9379 12.3565C89.0487 12.3594 89.1325 12.3636 89.1893 12.3693V13.392C89.1552 13.3835 89.0771 13.3707 88.9549 13.3537C88.8356 13.3338 88.7092 13.3239 88.5756 13.3239C88.2575 13.3239 87.9734 13.3906 87.7234 13.5241C87.4762 13.6548 87.2802 13.8366 87.1353 14.0696C86.9933 14.2997 86.9222 14.5625 86.9222 14.858V19H85.9165ZM92.3075 19.1534C91.8928 19.1534 91.5163 19.0753 91.1783 18.919C90.8402 18.7599 90.5717 18.5312 90.3729 18.233C90.174 17.9318 90.0746 17.5682 90.0746 17.142C90.0746 16.767 90.1484 16.4631 90.2962 16.2301C90.4439 15.9943 90.6413 15.8097 90.8885 15.6761C91.1357 15.5426 91.4084 15.4432 91.7067 15.3778C92.0078 15.3097 92.3104 15.2557 92.6143 15.2159C93.0121 15.1648 93.3345 15.1264 93.5817 15.1009C93.8317 15.0724 94.0135 15.0256 94.1271 14.9602C94.2436 14.8949 94.3018 14.7812 94.3018 14.6193V14.5852C94.3018 14.1648 94.1868 13.8381 93.9567 13.6051C93.7294 13.3722 93.3842 13.2557 92.9212 13.2557C92.4411 13.2557 92.0646 13.3608 91.7919 13.571C91.5192 13.7812 91.3274 14.0057 91.2166 14.2443L90.2621 13.9034C90.4325 13.5057 90.6598 13.196 90.9439 12.9744C91.2308 12.75 91.5433 12.5937 91.8814 12.5057C92.2223 12.4148 92.5575 12.3693 92.8871 12.3693C93.0973 12.3693 93.3388 12.3949 93.6115 12.446C93.8871 12.4943 94.1527 12.5952 94.4084 12.7486C94.6669 12.902 94.8814 13.1335 95.0518 13.4432C95.2223 13.7528 95.3075 14.1676 95.3075 14.6875V19H94.3018V18.1136H94.2507C94.1825 18.2557 94.0689 18.4077 93.9098 18.5696C93.7507 18.7315 93.5391 18.8693 93.2749 18.983C93.0107 19.0966 92.6882 19.1534 92.3075 19.1534ZM92.4609 18.25C92.8587 18.25 93.1939 18.1719 93.4666 18.0156C93.7422 17.8594 93.9496 17.6577 94.0888 17.4105C94.2308 17.1634 94.3018 16.9034 94.3018 16.6307V15.7102C94.2592 15.7614 94.1655 15.8082 94.0206 15.8509C93.8786 15.8906 93.7138 15.9261 93.5263 15.9574C93.3416 15.9858 93.1612 16.0114 92.9851 16.0341C92.8118 16.054 92.6712 16.071 92.5632 16.0852C92.3018 16.1193 92.0575 16.1747 91.8303 16.2514C91.6058 16.3253 91.424 16.4375 91.2848 16.5881C91.1484 16.7358 91.0803 16.9375 91.0803 17.1932C91.0803 17.5426 91.2095 17.8068 91.468 17.9858C91.7294 18.1619 92.0604 18.25 92.4609 18.25ZM99.7852 21.5909C99.2994 21.5909 98.8817 21.5284 98.5323 21.4034C98.1829 21.2812 97.8917 21.1193 97.6587 20.9176C97.4286 20.7188 97.2454 20.5057 97.109 20.2784L97.9102 19.7159C98.0011 19.8352 98.1161 19.9716 98.2553 20.125C98.3945 20.2812 98.5849 20.4162 98.8263 20.5298C99.0707 20.6463 99.3903 20.7045 99.7852 20.7045C100.314 20.7045 100.75 20.5767 101.093 20.321C101.437 20.0653 101.609 19.6648 101.609 19.1193V17.7898H101.524C101.45 17.9091 101.345 18.0568 101.208 18.233C101.075 18.4062 100.882 18.5611 100.629 18.6974C100.379 18.831 100.041 18.8977 99.6147 18.8977C99.0863 18.8977 98.6119 18.7727 98.1914 18.5227C97.7738 18.2727 97.4428 17.9091 97.1985 17.4318C96.957 16.9545 96.8363 16.375 96.8363 15.6932C96.8363 15.0227 96.9542 14.4389 97.19 13.9418C97.4258 13.4418 97.7539 13.0554 98.1744 12.7827C98.5948 12.5071 99.0806 12.3693 99.6317 12.3693C100.058 12.3693 100.396 12.4403 100.646 12.5824C100.899 12.7216 101.092 12.8807 101.225 13.0597C101.362 13.2358 101.467 13.3807 101.541 13.4943H101.643V12.4545H102.615V19.1875C102.615 19.75 102.487 20.2074 102.231 20.5597C101.978 20.9148 101.637 21.1747 101.208 21.3395C100.782 21.5071 100.308 21.5909 99.7852 21.5909ZM99.7511 17.9943C100.154 17.9943 100.495 17.902 100.774 17.7173C101.052 17.5327 101.264 17.267 101.409 16.9205C101.554 16.5739 101.626 16.1591 101.626 15.6761C101.626 15.2045 101.555 14.7884 101.413 14.4276C101.271 14.0668 101.061 13.7841 100.782 13.5795C100.504 13.375 100.16 13.2727 99.7511 13.2727C99.3249 13.2727 98.9698 13.3807 98.6857 13.5966C98.4045 13.8125 98.1928 14.1023 98.0508 14.4659C97.9116 14.8295 97.842 15.233 97.842 15.6761C97.842 16.1307 97.913 16.5327 98.055 16.8821C98.1999 17.2287 98.413 17.5014 98.6942 17.7003C98.9783 17.8963 99.3306 17.9943 99.7511 17.9943ZM107.2 19.1364C106.569 19.1364 106.025 18.9972 105.568 18.7188C105.113 18.4375 104.762 18.0455 104.515 17.5426C104.271 17.0369 104.149 16.4489 104.149 15.7784C104.149 15.108 104.271 14.517 104.515 14.0057C104.762 13.4915 105.106 13.0909 105.547 12.804C105.99 12.5142 106.507 12.3693 107.098 12.3693C107.439 12.3693 107.775 12.4261 108.108 12.5398C108.44 12.6534 108.743 12.8381 109.015 13.0938C109.288 13.3466 109.505 13.6818 109.667 14.0994C109.829 14.517 109.91 15.0312 109.91 15.642V16.0682H104.865V15.1989H108.887C108.887 14.8295 108.814 14.5 108.666 14.2102C108.521 13.9205 108.314 13.6918 108.044 13.5241C107.777 13.3565 107.461 13.2727 107.098 13.2727C106.697 13.2727 106.35 13.3722 106.058 13.571C105.768 13.767 105.545 14.0227 105.389 14.3381C105.233 14.6534 105.154 14.9915 105.154 15.3523V15.9318C105.154 16.4261 105.24 16.8452 105.41 17.1889C105.583 17.5298 105.824 17.7898 106.13 17.9688C106.437 18.1449 106.794 18.233 107.2 18.233C107.464 18.233 107.703 18.196 107.916 18.1222C108.132 18.0455 108.318 17.9318 108.474 17.7812C108.63 17.6278 108.751 17.4375 108.836 17.2102L109.808 17.483C109.706 17.8125 109.534 18.1023 109.292 18.3523C109.051 18.5994 108.752 18.7926 108.397 18.9318C108.042 19.0682 107.643 19.1364 107.2 19.1364Z"
                fill="white"
              />
              <defs>
                <clipPath id="clip0_5_8">
                  <rect width="27.2" height="27.18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </li>
        </ul>
      </div>

      <div className="flex py-24 md:flex-row flex-col items-center container 2xl:px-24 sm:px-6 mx-auto">
        <div className="lg:flex-grow  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-3xl mb-12 font-medium text-white dark:text-white">
            Zilliqa Soul-Bound Token
          </h1>
          <div className="flex justify-between space-x-8 mb-12">
            {content.map((items) => (
              // title={items.title}
              // subtitle={items.subtitle}
              // content={items.content}

              <div className="why-us">
                <div className="card-why-us">
                  <h5>{items.subtitle}</h5>
                  <h4>{items.title}</h4>
                  <p>{items.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-3 mx-auto">
            <Link to="/create-profile" className="cta-primary">
              Minting Page
            </Link>
          </div>
        </div>
      </div>
      {/* featured profiles */}
      <div className=" featured py-16 container 2xl:px-24 sm:px-6 mx-auto">
        <h2 className="text-center mb-8">Our Featured Profiles</h2>
        {/* card grid */}
        <div className="grid w-full md:grid-cols-2 xl:grid-cols-4 justify-items-center gap-y-8">
          <div className="card">
            <a href={`/profiles/0x3227edf3d8ef577170f339689a128ce229dd8df2`}>
              <div className="card-image">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                ></img>
              </div>
              <div className="px-5 py-2">
                <div className="mb-4">
                  <p className="card-name mt-4">@NFT_Creator</p>
                  <div className="flex mt-2 mb-2">
                    <img
                      src="https://i.postimg.cc/zBDtJMJk/image-1.png"
                      width="30"
                      alt=""
                    />
                    <p className="text-md text-gray-200 flex items-center">
                      {String(
                        "0x3227edf3d8ef577170f339689a128ce229dd8df2"
                      ).substring(0, 6) +
                        "..." +
                        String(
                          "0x3227edf3d8ef577170f339689a128ce229dd8df2"
                        ).substring(38)}
                    </p>
                  </div>
                  <div className="flex">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 59 83"
                      fill="none"
                      className="w-4 ml-1 mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M46.5611 39.6676L14.6193 55.4641L46.5611 70.6903V82.9687L0.0255025 60.7895L0 48.7033L32.3818 32.7017L0.0255025 17.2833V5.00488L46.5611 27.1841V39.6676Z"
                        fill="url(#paint0_linear_0_1)"
                      />
                      <path
                        d="M0.0249023 5.00491L12.3235 0L58.8591 22.1728L46.5606 27.1842L0.0249023 5.00491Z"
                        fill="url(#paint1_linear_0_1)"
                      />
                      <path
                        d="M46.5612 70.6905V46.1466L58.8597 40.4624V77.9576L46.5612 82.9689V70.6905Z"
                        fill="url(#paint2_linear_0_1)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_0_1"
                          x1="46.593"
                          y1="83.4429"
                          x2="7.44516"
                          y2="17.8244"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#05707E" />
                          <stop offset="0.52" stop-color="#2B9297" />
                          <stop offset="1" stop-color="#4DBBBA" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_0_1"
                          x1="2.3265"
                          y1="3.81937"
                          x2="57.7694"
                          y2="23.5946"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#05707E" />
                          <stop offset="0.52" stop-color="#2B9297" />
                          <stop offset="1" stop-color="#4DBBBA" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_0_1"
                          x1="52.5606"
                          y1="37.7901"
                          x2="52.8505"
                          y2="82.8535"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#05707E" />
                          <stop offset="0.52" stop-color="#2B9297" />
                          <stop offset="1" stop-color="#4DBBBA" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <p className="text-lg text-white flex items-center">0.18</p>
                    <a
                      href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20profile%20on%20Zilsbt%3A%0A%0Ahttp%3A//localhost%3A3000/profiles/0x3227edf3d8ef577170f339689a128ce229dd8df2`}
                      className="ml-auto mr-2 w-5 pl-4 "
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_58_309)">
                          <path
                            d="M16.5002 3.74998C16.5 2.87013 16.8093 2.01826 17.3739 1.3434C17.9384 0.668542 18.7223 0.213678 19.5883 0.0583884C20.4543 -0.0969011 21.3474 0.0572728 22.1112 0.493936C22.8751 0.9306 23.4611 1.62195 23.7667 2.44702C24.0723 3.27209 24.078 4.17835 23.7829 5.00724C23.4879 5.83613 22.9107 6.53487 22.1525 6.9812C21.3942 7.42753 20.5032 7.59304 19.6352 7.44876C18.7673 7.30448 17.9777 6.85961 17.4047 6.19198L7.32765 10.872C7.55932 11.6061 7.55932 12.3938 7.32765 13.128L17.4047 17.808C18.0104 17.1035 18.8561 16.6489 19.7779 16.5325C20.6997 16.416 21.632 16.6458 22.3939 17.1775C23.1559 17.7092 23.6934 18.5048 23.9022 19.4102C24.1109 20.3155 23.9762 21.2662 23.524 22.0778C23.0719 22.8895 22.3345 23.5044 21.4548 23.8034C20.5751 24.1024 19.6157 24.0642 18.7626 23.6961C17.9095 23.328 17.2233 22.6564 16.8372 21.8113C16.4511 20.9662 16.3925 20.0079 16.6727 19.122L6.59565 14.442C6.09681 15.0233 5.43188 15.438 4.69032 15.6301C3.94876 15.8222 3.16615 15.7827 2.44776 15.5167C1.72937 15.2507 1.10967 14.7711 0.672015 14.1424C0.234362 13.5137 -0.000244141 12.766 -0.000244141 12C-0.000244141 11.2339 0.234362 10.4863 0.672015 9.85755C1.10967 9.22884 1.72937 8.74923 2.44776 8.48326C3.16615 8.21729 3.94876 8.17772 4.69032 8.36985C5.43188 8.56199 6.09681 8.97663 6.59565 9.55798L16.6727 4.87798C16.5579 4.51298 16.4998 4.13258 16.5002 3.74998Z"
                            fill="#E6E6E6"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_58_309">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="card">
            <a href={`/profiles/0x3227edf3d8ef577170f339689a128ce229dd8df2`}>
              <div className="card-image">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM4XkTv7CB8TecNeMJAfNEzuDEpdHQsCak2ScpeKAMNvx1k_RfPmNQ3R69XrLwtCUeKg0&usqp=CAU"
                  alt=""
                ></img>
              </div>
              <div className="px-5 py-2">
                <div className="mb-4">
                  <p className="card-name mt-4">@NFT_Pirate</p>
                  <div className="flex mt-2 mb-2">
                    <img
                      src="https://i.postimg.cc/zBDtJMJk/image-1.png"
                      width="30"
                      alt=""
                    />
                    <p className="text-md text-gray-200 flex items-center">
                      {String(
                        "0x3227edf3d8ef577170f339689a128ce229dd8df2"
                      ).substring(0, 6) +
                        "..." +
                        String(
                          "0x3227edf3d8ef577170f339689a128ce229dd8df2"
                        ).substring(38)}
                    </p>
                  </div>
                  <div className="flex">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 59 83"
                      fill="none"
                      className="w-4 ml-1 mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M46.5611 39.6676L14.6193 55.4641L46.5611 70.6903V82.9687L0.0255025 60.7895L0 48.7033L32.3818 32.7017L0.0255025 17.2833V5.00488L46.5611 27.1841V39.6676Z"
                        fill="url(#paint0_linear_0_1)"
                      />
                      <path
                        d="M0.0249023 5.00491L12.3235 0L58.8591 22.1728L46.5606 27.1842L0.0249023 5.00491Z"
                        fill="url(#paint1_linear_0_1)"
                      />
                      <path
                        d="M46.5612 70.6905V46.1466L58.8597 40.4624V77.9576L46.5612 82.9689V70.6905Z"
                        fill="url(#paint2_linear_0_1)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_0_1"
                          x1="46.593"
                          y1="83.4429"
                          x2="7.44516"
                          y2="17.8244"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#05707E" />
                          <stop offset="0.52" stop-color="#2B9297" />
                          <stop offset="1" stop-color="#4DBBBA" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_0_1"
                          x1="2.3265"
                          y1="3.81937"
                          x2="57.7694"
                          y2="23.5946"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#05707E" />
                          <stop offset="0.52" stop-color="#2B9297" />
                          <stop offset="1" stop-color="#4DBBBA" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_0_1"
                          x1="52.5606"
                          y1="37.7901"
                          x2="52.8505"
                          y2="82.8535"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#05707E" />
                          <stop offset="0.52" stop-color="#2B9297" />
                          <stop offset="1" stop-color="#4DBBBA" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <p className="text-lg text-white flex items-center">0.18</p>
                    <a
                      href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20profile%20on%20Zilsbt%3A%0A%0Ahttp%3A//localhost%3A3000/profiles/0x3227edf3d8ef577170f339689a128ce229dd8df2`}
                      className="ml-auto mr-2 w-5 pl-4 "
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_58_309)">
                          <path
                            d="M16.5002 3.74998C16.5 2.87013 16.8093 2.01826 17.3739 1.3434C17.9384 0.668542 18.7223 0.213678 19.5883 0.0583884C20.4543 -0.0969011 21.3474 0.0572728 22.1112 0.493936C22.8751 0.9306 23.4611 1.62195 23.7667 2.44702C24.0723 3.27209 24.078 4.17835 23.7829 5.00724C23.4879 5.83613 22.9107 6.53487 22.1525 6.9812C21.3942 7.42753 20.5032 7.59304 19.6352 7.44876C18.7673 7.30448 17.9777 6.85961 17.4047 6.19198L7.32765 10.872C7.55932 11.6061 7.55932 12.3938 7.32765 13.128L17.4047 17.808C18.0104 17.1035 18.8561 16.6489 19.7779 16.5325C20.6997 16.416 21.632 16.6458 22.3939 17.1775C23.1559 17.7092 23.6934 18.5048 23.9022 19.4102C24.1109 20.3155 23.9762 21.2662 23.524 22.0778C23.0719 22.8895 22.3345 23.5044 21.4548 23.8034C20.5751 24.1024 19.6157 24.0642 18.7626 23.6961C17.9095 23.328 17.2233 22.6564 16.8372 21.8113C16.4511 20.9662 16.3925 20.0079 16.6727 19.122L6.59565 14.442C6.09681 15.0233 5.43188 15.438 4.69032 15.6301C3.94876 15.8222 3.16615 15.7827 2.44776 15.5167C1.72937 15.2507 1.10967 14.7711 0.672015 14.1424C0.234362 13.5137 -0.000244141 12.766 -0.000244141 12C-0.000244141 11.2339 0.234362 10.4863 0.672015 9.85755C1.10967 9.22884 1.72937 8.74923 2.44776 8.48326C3.16615 8.21729 3.94876 8.17772 4.69032 8.36985C5.43188 8.56199 6.09681 8.97663 6.59565 9.55798L16.6727 4.87798C16.5579 4.51298 16.4998 4.13258 16.5002 3.74998Z"
                            fill="#E6E6E6"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_58_309">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="card">
            <a href={`/profiles/0x3227edf3d8ef577170f339689a128ce229dd8df2`}>
              <div className="card-image">
                <img
                  alt=""
                  src="data:image/jpeg;base64,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"
                ></img>
              </div>
              <div className="px-5 py-2">
                <div className="mb-4">
                  <p className="card-name mt-4">@NFT_Captain</p>
                  <div className="flex mt-2 mb-2">
                    <img
                      src="https://i.postimg.cc/zBDtJMJk/image-1.png"
                      width="30"
                      alt=""
                    />
                    <p className="text-md text-gray-200 flex items-center">
                      {String(
                        "0x3227edf3d8ef577170f339689a128ce229dd8df2"
                      ).substring(0, 6) +
                        "..." +
                        String(
                          "0x3227edf3d8ef577170f339689a128ce229dd8df2"
                        ).substring(38)}
                    </p>
                  </div>
                  <div className="flex">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 59 83"
                      fill="none"
                      className="w-4 ml-1 mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M46.5611 39.6676L14.6193 55.4641L46.5611 70.6903V82.9687L0.0255025 60.7895L0 48.7033L32.3818 32.7017L0.0255025 17.2833V5.00488L46.5611 27.1841V39.6676Z"
                        fill="url(#paint0_linear_0_1)"
                      />
                      <path
                        d="M0.0249023 5.00491L12.3235 0L58.8591 22.1728L46.5606 27.1842L0.0249023 5.00491Z"
                        fill="url(#paint1_linear_0_1)"
                      />
                      <path
                        d="M46.5612 70.6905V46.1466L58.8597 40.4624V77.9576L46.5612 82.9689V70.6905Z"
                        fill="url(#paint2_linear_0_1)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_0_1"
                          x1="46.593"
                          y1="83.4429"
                          x2="7.44516"
                          y2="17.8244"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#05707E" />
                          <stop offset="0.52" stop-color="#2B9297" />
                          <stop offset="1" stop-color="#4DBBBA" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_0_1"
                          x1="2.3265"
                          y1="3.81937"
                          x2="57.7694"
                          y2="23.5946"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#05707E" />
                          <stop offset="0.52" stop-color="#2B9297" />
                          <stop offset="1" stop-color="#4DBBBA" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_0_1"
                          x1="52.5606"
                          y1="37.7901"
                          x2="52.8505"
                          y2="82.8535"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#05707E" />
                          <stop offset="0.52" stop-color="#2B9297" />
                          <stop offset="1" stop-color="#4DBBBA" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <p className="text-lg text-white flex items-center">0.18</p>
                    <a
                      href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20profile%20on%20Zilsbt%3A%0A%0Ahttp%3A//localhost%3A3000/profiles/0x3227edf3d8ef577170f339689a128ce229dd8df2`}
                      className="ml-auto mr-2 w-5 pl-4"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_58_309)">
                          <path
                            d="M16.5002 3.74998C16.5 2.87013 16.8093 2.01826 17.3739 1.3434C17.9384 0.668542 18.7223 0.213678 19.5883 0.0583884C20.4543 -0.0969011 21.3474 0.0572728 22.1112 0.493936C22.8751 0.9306 23.4611 1.62195 23.7667 2.44702C24.0723 3.27209 24.078 4.17835 23.7829 5.00724C23.4879 5.83613 22.9107 6.53487 22.1525 6.9812C21.3942 7.42753 20.5032 7.59304 19.6352 7.44876C18.7673 7.30448 17.9777 6.85961 17.4047 6.19198L7.32765 10.872C7.55932 11.6061 7.55932 12.3938 7.32765 13.128L17.4047 17.808C18.0104 17.1035 18.8561 16.6489 19.7779 16.5325C20.6997 16.416 21.632 16.6458 22.3939 17.1775C23.1559 17.7092 23.6934 18.5048 23.9022 19.4102C24.1109 20.3155 23.9762 21.2662 23.524 22.0778C23.0719 22.8895 22.3345 23.5044 21.4548 23.8034C20.5751 24.1024 19.6157 24.0642 18.7626 23.6961C17.9095 23.328 17.2233 22.6564 16.8372 21.8113C16.4511 20.9662 16.3925 20.0079 16.6727 19.122L6.59565 14.442C6.09681 15.0233 5.43188 15.438 4.69032 15.6301C3.94876 15.8222 3.16615 15.7827 2.44776 15.5167C1.72937 15.2507 1.10967 14.7711 0.672015 14.1424C0.234362 13.5137 -0.000244141 12.766 -0.000244141 12C-0.000244141 11.2339 0.234362 10.4863 0.672015 9.85755C1.10967 9.22884 1.72937 8.74923 2.44776 8.48326C3.16615 8.21729 3.94876 8.17772 4.69032 8.36985C5.43188 8.56199 6.09681 8.97663 6.59565 9.55798L16.6727 4.87798C16.5579 4.51298 16.4998 4.13258 16.5002 3.74998Z"
                            fill="#E6E6E6"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_58_309">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="card">
            <a href={`/profiles/0x3227edf3d8ef577170f339689a128ce229dd8df2`}>
              <div className="card-image">
                <img
                  src="https://pbs.twimg.com/profile_images/1490533817416925189/oDKK6UFj_400x400.jpg"
                  alt=""
                ></img>
              </div>
              <div className="px-5 py-2">
                <div className="mb-4">
                  <p className="card-name mt-4">@NFT_King</p>
                  <div className="flex mt-2 mb-2">
                    <img
                      src="https://i.postimg.cc/zBDtJMJk/image-1.png"
                      width="30"
                      alt=""
                    />
                    <p className="text-md text-gray-200 flex items-center">
                      {String(
                        "0x3227edf3d8ef577170f339689a128ce229dd8df2"
                      ).substring(0, 6) +
                        "..." +
                        String(
                          "0x3227edf3d8ef577170f339689a128ce229dd8df2"
                        ).substring(38)}
                    </p>
                  </div>
                  <div className="flex">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 59 83"
                      fill="none"
                      className="w-4 ml-1 mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M46.5611 39.6676L14.6193 55.4641L46.5611 70.6903V82.9687L0.0255025 60.7895L0 48.7033L32.3818 32.7017L0.0255025 17.2833V5.00488L46.5611 27.1841V39.6676Z"
                        fill="url(#paint0_linear_0_1)"
                      />
                      <path
                        d="M0.0249023 5.00491L12.3235 0L58.8591 22.1728L46.5606 27.1842L0.0249023 5.00491Z"
                        fill="url(#paint1_linear_0_1)"
                      />
                      <path
                        d="M46.5612 70.6905V46.1466L58.8597 40.4624V77.9576L46.5612 82.9689V70.6905Z"
                        fill="url(#paint2_linear_0_1)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_0_1"
                          x1="46.593"
                          y1="83.4429"
                          x2="7.44516"
                          y2="17.8244"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#05707E" />
                          <stop offset="0.52" stop-color="#2B9297" />
                          <stop offset="1" stop-color="#4DBBBA" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_0_1"
                          x1="2.3265"
                          y1="3.81937"
                          x2="57.7694"
                          y2="23.5946"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#05707E" />
                          <stop offset="0.52" stop-color="#2B9297" />
                          <stop offset="1" stop-color="#4DBBBA" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_0_1"
                          x1="52.5606"
                          y1="37.7901"
                          x2="52.8505"
                          y2="82.8535"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#05707E" />
                          <stop offset="0.52" stop-color="#2B9297" />
                          <stop offset="1" stop-color="#4DBBBA" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <p className="text-lg text-white flex items-center">0.18</p>
                    <a
                      href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20profile%20on%20Zilsbt%3A%0A%0Ahttp%3A//localhost%3A3000/profiles/0x3227edf3d8ef577170f339689a128ce229dd8df2`}
                      className="ml-auto mr-2 w-5 pl-4"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_58_309)">
                          <path
                            d="M16.5002 3.74998C16.5 2.87013 16.8093 2.01826 17.3739 1.3434C17.9384 0.668542 18.7223 0.213678 19.5883 0.0583884C20.4543 -0.0969011 21.3474 0.0572728 22.1112 0.493936C22.8751 0.9306 23.4611 1.62195 23.7667 2.44702C24.0723 3.27209 24.078 4.17835 23.7829 5.00724C23.4879 5.83613 22.9107 6.53487 22.1525 6.9812C21.3942 7.42753 20.5032 7.59304 19.6352 7.44876C18.7673 7.30448 17.9777 6.85961 17.4047 6.19198L7.32765 10.872C7.55932 11.6061 7.55932 12.3938 7.32765 13.128L17.4047 17.808C18.0104 17.1035 18.8561 16.6489 19.7779 16.5325C20.6997 16.416 21.632 16.6458 22.3939 17.1775C23.1559 17.7092 23.6934 18.5048 23.9022 19.4102C24.1109 20.3155 23.9762 21.2662 23.524 22.0778C23.0719 22.8895 22.3345 23.5044 21.4548 23.8034C20.5751 24.1024 19.6157 24.0642 18.7626 23.6961C17.9095 23.328 17.2233 22.6564 16.8372 21.8113C16.4511 20.9662 16.3925 20.0079 16.6727 19.122L6.59565 14.442C6.09681 15.0233 5.43188 15.438 4.69032 15.6301C3.94876 15.8222 3.16615 15.7827 2.44776 15.5167C1.72937 15.2507 1.10967 14.7711 0.672015 14.1424C0.234362 13.5137 -0.000244141 12.766 -0.000244141 12C-0.000244141 11.2339 0.234362 10.4863 0.672015 9.85755C1.10967 9.22884 1.72937 8.74923 2.44776 8.48326C3.16615 8.21729 3.94876 8.17772 4.69032 8.36985C5.43188 8.56199 6.09681 8.97663 6.59565 9.55798L16.6727 4.87798C16.5579 4.51298 16.4998 4.13258 16.5002 3.74998Z"
                            fill="#E6E6E6"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_58_309">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
