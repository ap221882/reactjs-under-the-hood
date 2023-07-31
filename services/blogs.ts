const blogData = [
  {
    id: "1",
    topics: ["react"],
    heading:
      "React: Context API and React.memo - Where even React.memo doesn't work!",
    Content: `▶︎ We all know how to create a context in React. We all know Context API helps us avoid prop drilling.

▶︎ Context API passes an invisible prop, not in the prop object, and can be accessible using useContext hook in any component down the React Component Tree.

▶︎ How do we pass the prop? We pass it through a “value” prop in the CONTEXT PROVIDER.

▶︎ What happens in React when we do this?

▶︎ ▶︎ Context, just like any other React Component, is positioned in the React Component hierarchy and controls the context inside the React Component’s branch where it is wrapped.

Story over! Right?

▶︎ ▶︎ No! React having the declarative UI rendering pattern based on “diffing”, renders all the components in the tree when any PARENT COMPONENT’s state or prop provided by it changes. 
▶︎ ▶︎ Context API, when wrapped over some component, is intended to PROPAGATE the value(context’s value) all over the components that consume context. 
It’s not a bug or slow thing about it. It is how it should behave, as all the consuming components need the updated value every time.

▶︎ ▶︎ And if the value passed over, never changes, and is a primitive value(string, number etc.). The context will never rerender child components.

▶︎ But we most of the time deal with values that change over time.

▶︎ Now the question is - How do we preserve values in React’s memory? Through state, i.e., useState and useReducer.

Generally what we do is -

const [someState, setSomeState] = useState(initialValue) 
const [someComplexState, dispatch] = useReducer(reducer, initialValue) 
—
<SOMEPROVIDER value = { {someState, setSomeState, someComplexState, dispatch}}> {children} </SOMEPROVIDER>

▶︎ ▶︎ This sends the value prop as an object and React does its comparison based on Object(.)is which happens to be false every time in the case of the object.  
▶︎ ▶︎ Even Wrapping the Child Components in REACT.MEMO will not work!

setState, and dispatch are functions preserved by React hence they never trigger rerenders, but since your value is an object you even trigger re-render for the components that consume “setStates” or “dispatch” only. So what is the solution to this problem?

▶︎ The solution is two contexts. One for the “reactive values” or “values that change over the time” and one for the values that React preserves like setStates and dispatchers.

—
<SETSTATECONTEXT.PROVIDER value = {dispatch }>
<STATECONTEXT.PROVIDER value = {someComplexState}>
{children}
</STATECONTEXT.PROVIDER>
</SETSTATECONTEXT.PROVIDER>

— 
So the basic giveaway from here is the VALUES passed from CONTEXT, should be kept care of and bifurcated into different contexts if not fulfilling their purposes, i.e., are objects etc.
`,
    recent: true,
    imgSrc: `https://media.licdn.com/dms/image/D4D22AQEkxguyyzwdvA/feedshare-shrink_800/0/1689685868351?e=1693440000&v=beta&t=fpncxgiJaCrTDvpKNlZEL43x18dmUWM3-sFC1EkQRZg`,
  },
];
