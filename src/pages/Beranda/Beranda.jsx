// Component
import Button from "../../components/Button";

// Images
import logo from "../../images/logo.png";

function Beranda() {
  return (
    <>
      <section
        className="h-[100vh] bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1035%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(58%2c 70%2c 151%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c630.161C116.439%2c600.728%2c143.562%2c444.118%2c236.636%2c368.213C314.443%2c304.759%2c430.958%2c303.261%2c495.326%2c226.208C569.13%2c137.86%2c635.225%2c24.971%2c618.524%2c-88.93C601.828%2c-202.797%2c502.378%2c-286.604%2c410.06%2c-355.319C329.917%2c-414.972%2c229.392%2c-426.982%2c132.364%2c-450.791C39.981%2c-473.46%2c-49.761%2c-502.131%2c-144.271%2c-491.343C-251.868%2c-479.061%2c-368.327%2c-462.167%2c-444.278%2c-384.969C-521.498%2c-306.482%2c-543.267%2c-188.968%2c-549.893%2c-79.063C-556.168%2c25.029%2c-517.36%2c121.906%2c-480.72%2c219.538C-441.404%2c324.3%2c-413.514%2c438.372%2c-328.431%2c511.048C-238.052%2c588.248%2c-115.237%2c659.29%2c0%2c630.161' fill='%23343f88'%3e%3c/path%3e%3cpath d='M1440 871.2819999999999C1498.351 857.895 1556.577 851.777 1609.363 823.533 1665.748 793.364 1713.709 753.1030000000001 1753.873 703.341 1804.5439999999999 640.561 1889.76 576.604 1872.225 497.855 1854.307 417.384 1730.0430000000001 417.76099999999997 1676.353 355.199 1622.2350000000001 292.138 1640.442 170.51299999999998 1563.781 138.44099999999997 1489.177 107.23000000000002 1406.621 170.45100000000002 1338.344 213.79000000000002 1282.309 249.35899999999998 1251.185 308.808 1211.533 362.03200000000004 1175.08 410.961 1137.194 456.38599999999997 1115.204 513.301 1088.161 583.295 1052.109 656.164 1069.71 729.106 1088.375 806.4590000000001 1137.7730000000001 886.1610000000001 1212.058 914.684 1285.757 942.981 1363.054 888.935 1440 871.2819999999999' fill='%23404da6'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1035'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
        }}
      >
        <div className="container flex items-center justify-center h-full text-white">
          <div>
            <img src={logo} alt="" className="w-[8rem] mx-auto mb-8" />
            <h1 className="w-full sm:w-[18em] text-[1.5em] md:text-[2em] font-semibold text-center">
              <span className="text-third">Selamat</span> Datang di Website
              Resmi SMK Karya Guna Bhakti 2 Bekasi 2023
            </h1>

            <div className="flex items-center justify-center gap-3 mt-8">
              <Button type="link" to="/login" bg="primary">
                Login
              </Button>
              <Button type="link" to="/register" bg="outline">
                Daftar
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Beranda;
