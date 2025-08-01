const Bubble = ({ name, action, hover, unhover, stages = 'Country', uiStage, id, flag = null }) => {
    return (
        <main
            onClick={action}
            onMouseEnter={hover}
            onMouseLeave={unhover}
            className={`
                items-center grid my-auto hover:bg-slate-500/30
                py-1 min-h-9 bg-slate-800/70 select-none cursor-pointer
                min-w-0 w-[11em] h-[3em] rounded-sm px-2
                ${stages[uiStage]?.name === 'Language' && 'justify-center'}
                ${stages[uiStage]?.name === 'Country' && 'justify-start'}
                ${stages[uiStage]?.name === 'Continent' && 'justify-center'}
            `}
        >
            <button
                className={`
                    flex gap-2 ml-auto items-center overflow-hidden min-w-0
                    ${stages[uiStage]?.name === 'Language' && 'w-full'}
                    ${stages[uiStage]?.name === 'Country' && 'w-full'}
                `}
            >
                {stages[uiStage]?.name === 'Continent' && name}

                {stages[uiStage]?.name === 'Language' && (
                    <span
                        className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap"
                    >
                        {name}
                    </span>
                )}

                {stages[uiStage]?.name === 'Country' && (
                    <>
                        <div className="h-4 w-4 rounded-full overflow-hidden border border-slate-900/30 shrink-0">
                            <img
                                src={flag}
                                className="h-4 w-full object-cover"
                            />
                        </div>
                        <span
                            className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap"
                        >
                            {name}
                        </span>
                    </>
                )}
            </button>
        </main>
    );
};

export default Bubble;
