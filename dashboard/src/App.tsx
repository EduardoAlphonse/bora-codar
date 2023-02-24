import { Smile } from "./components/Icons/Smile";
import { RadialGraph } from "./components/RadialGraph";
import { CardContainer } from "./components/CardContainer";
import {
  WeekDayBarGraph,
  WeekDayBarGraphProps,
} from "./components/WeekDayBarGraph";

function App() {
  const weekSales: WeekDayBarGraphProps[] = [
    { weekday: "dom", complete: 22 },
    { weekday: "seg", complete: 44 },
    { weekday: "ter", complete: 32 },
    { weekday: "qua", complete: 82 },
    { weekday: "qui", complete: 73 },
    { weekday: "sex", complete: 49 },
    { weekday: "sáb", complete: 53 },
  ];

  return (
    <div className="flex justify-center items-center bg-violet-900 min-h-screen text-white">
      <div className="grid grid-cols-33 gap-8">
        <CardContainer
          title="NPS Geral"
          divAttributes={{
            style: {
              gridColumn: "1 / 11",
            },
          }}
        >
          <div className="flex flex-col gap-4 items-center">
            <div className="w-12 h-12">
              <Smile />
            </div>
            <span className="text-green-400 font-semibold text-2xl">
              Excelente!
            </span>
          </div>

          <div className="flex gap-[10px] text-sm font-medium">
            <span>NPS Score</span>
            <span>75</span>
          </div>
        </CardContainer>

        <CardContainer
          title="Vendas fechadas"
          divAttributes={{
            style: {
              gridColumn: "11 / 22",
            },
          }}
        >
          <div className="relative">
            <div className="absolute left-0 top-0">
              <RadialGraph complete={100} color1="#4A4556" color2="#4A4556" />
            </div>
            <div className="relative z-10">
              <RadialGraph complete={70} color1="#CE9FFC" color2="#7367F0" />
            </div>
            <div className="flex flex-col items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="text-3xl font-bold">70%</span>
              <span>alcançada</span>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex gap-[10px] text-sm font-medium">
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-violet-700" />
                <span>Esperado</span>
              </div>
              <span>100</span>
            </div>

            <div className="flex gap-[10px] text-sm font-medium">
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#CE9FFC] to-[#7367F0]" />
                <span>Alcançado</span>
              </div>
              <span>70</span>
            </div>
          </div>
        </CardContainer>

        <CardContainer
          title="Meta mensal"
          divAttributes={{
            style: {
              gridColumn: "22 / 34",
            },
          }}
        >
          <div className="relative">
            <div className="absolute left-0 top-0 z-0">
              <RadialGraph complete={100} color1="#4A4556" color2="#4A4556" />
            </div>
            <div className="relative z-10">
              <RadialGraph complete={90} color1="#DF9780" color2="#A66DE9" />
            </div>
            <div className="flex flex-col items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="text-3xl font-bold">90%</span>
              <span>alcançada</span>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex gap-[10px] text-sm font-medium">
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-violet-700" />
                <span>Esperado</span>
              </div>
              <span>R$&nbsp;70K</span>
            </div>

            <div className="flex gap-[10px] text-sm font-medium">
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#DF9780] to-[#A66DE9]" />
                <span>Alcançado</span>
              </div>
              <span>R$&nbsp;63K</span>
            </div>
          </div>
        </CardContainer>

        <div className="col-[1_/_span_33] flex flex-col gap-8 px-12 py-7 rounded-2xl bg-violet-800 shadow-[3px_4px_26px_rgba(0,0,0,0.25)] mt-7">
          <h2 className="text-2xl font-semibold">Vendas por dia da semana</h2>

          <div className="flex gap-4">
            <div className="flex-1">
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium flex items-center gap-2">
                  <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-transparent border-b-green-500 border-solid" />{" "}
                  Dia com mais vendas
                </span>
                <span className="text-2xl font-medium">quarta-feira</span>
              </div>
              <div className="flex flex-col gap-2 mt-8">
                <span className="text-sm font-medium flex items-center gap-2">
                  <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[12px] border-transparent border-t-red-500 border-solid" />{" "}
                  Dia com menos vendas
                </span>
                <span className="text-2xl font-medium">domingo</span>
              </div>
            </div>

            <div className="flex flex-1 justify-between relative">
              {weekSales.map((sale, index) => (
                <WeekDayBarGraph
                  key={sale.weekday}
                  weekday={sale.weekday}
                  complete={sale.complete}
                  index={index}
                />
              ))}

              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[3px] bg-violet-700 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
